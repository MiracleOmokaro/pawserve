import { useState } from 'react';
import { ShoppingBag, Search, Plus, Minus, X, ShoppingCart } from 'lucide-react';
import { products, type Product } from '../constants/data';

const categories = ['All', 'Food', 'Toys', 'Health', 'Grooming'] as const;

export default function Shop() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [cart, setCart] = useState<Record<string, number>>({});
  const [showCart, setShowCart] = useState(false);

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || p.category === category;
    return matchesSearch && matchesCategory;
  });

  const cartItems = Object.entries(cart).filter(([, qty]) => qty > 0).map(([id, qty]) => {
    const product = products.find((p) => p.id === id)!;
    return { ...product, quantity: qty };
  });

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) => {
      const current = prev[id] || 0;
      const next = current + delta;
      if (next <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: next };
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4">
            <ShoppingBag className="w-7 h-7 text-secondary" />
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">Shop</h1>
          <p className="text-foreground/60 mt-1">Premium supplies for your furry friend.</p>
        </div>
        <button
          onClick={() => setShowCart(true)}
          className="relative p-3 bg-card border border-border rounded-xl hover:bg-card-hover transition-all duration-150 cursor-pointer"
          aria-label={`Shopping cart with ${cartCount} items`}
        >
          <ShoppingCart className="w-5 h-5 text-foreground" />
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-secondary text-white text-xs font-bold rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-border rounded-xl text-sm focus:border-ring focus:ring-2 focus:ring-ring/20 outline-none transition-all duration-150"
            aria-label="Search products"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-150 cursor-pointer ${
                category === cat
                  ? 'bg-secondary text-white'
                  : 'bg-muted text-foreground/70 hover:bg-muted/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16">
          <ShoppingBag className="w-12 h-12 text-foreground/20 mx-auto mb-4" />
          <p className="text-foreground/50 text-lg">No products found.</p>
          <p className="text-foreground/40 text-sm mt-2">Try a different search or category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const inCart = (cart[product.id] || 0) > 0;
            return (
              <div
                key={product.id}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                  <h3 className="font-heading font-semibold text-foreground mt-2 mb-1">{product.name}</h3>
                  <p className="text-sm text-foreground/60 line-clamp-2 mb-3">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-xl font-bold text-foreground">${product.price.toFixed(2)}</span>
                    {inCart ? (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(product.id, -1)}
                          className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-muted/80 transition-all duration-150 cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-semibold text-sm w-5 text-center">{cart[product.id]}</span>
                        <button
                          onClick={() => updateQuantity(product.id, 1)}
                          className="w-8 h-8 bg-secondary text-white rounded-lg flex items-center justify-center hover:bg-secondary/90 transition-all duration-150 cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => updateQuantity(product.id, 1)}
                        className="flex items-center gap-1.5 bg-secondary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-secondary/90 transition-all duration-150 active:scale-[0.97] cursor-pointer"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Cart Drawer */}
      {showCart && (
        <div
          className="fixed inset-0 z-50 animate-fade-in"
          onClick={() => setShowCart(false)}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div
            className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-heading text-xl font-bold text-foreground">Your Cart</h2>
              <button
                onClick={() => setShowCart(false)}
                className="p-2 hover:bg-muted rounded-lg transition-colors duration-150 cursor-pointer"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 px-6">
                <ShoppingCart className="w-12 h-12 text-foreground/20 mb-4" />
                <p className="text-foreground/50">Your cart is empty</p>
                <p className="text-foreground/40 text-sm mt-1">Add some products to get started!</p>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover" />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm text-foreground truncate">{item.name}</h3>
                        <p className="text-sm font-semibold text-foreground mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-7 h-7 bg-muted rounded-lg flex items-center justify-center hover:bg-muted/80 transition-all duration-150 cursor-pointer"
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-sm font-semibold w-5 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-7 h-7 bg-secondary text-white rounded-lg flex items-center justify-center hover:bg-secondary/90 transition-all duration-150 cursor-pointer"
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground">Total</span>
                    <span className="font-heading text-xl font-bold text-foreground">${cartTotal.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={() => {
                      alert('Checkout is a demo feature — no real payment is processed. Thanks for shopping at PawServe! 🐾');
                      setShowCart(false);
                    }}
                    className="w-full bg-secondary text-white py-3 rounded-xl font-semibold hover:bg-secondary/90 transition-all duration-150 active:scale-[0.97] cursor-pointer"
                  >
                    Checkout (Demo)
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}