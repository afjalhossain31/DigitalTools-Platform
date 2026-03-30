import React, { useState } from "react";
import writingImg from "../../assets/products/writing_2327400 1.png";
import designImg from "../../assets/products/design-tool.png";
import portfolioImg from "../../assets/products/portfolio.png";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Content Writer",
      price: 29,
      quantity: 1,
      image: writingImg
    },
    {
      id: 2,
      name: "Design Tools",
      price: 39,
      quantity: 1,
      image: designImg
    }
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    ));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = Math.round(subtotal * 0.1 * 100) / 100;
  const total = subtotal + tax;

  return (
    <div className="container mx-auto mt-10 mb-10">
      <h1 className="text-4xl font-bold mb-10 text-[#101727]">Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-neutral-500">Your cart is empty</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="card bg-base-100 shadow-sm">
                  <div className="card-body">
                    <div className="flex gap-6 items-center">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold">{item.name}</h3>
                        <p className="text-lg font-medium text-purple-600">${item.price}/Mo</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="btn btn-sm btn-ghost"
                        >
                          -
                        </button>
                        <input 
                          type="number" 
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                          className="input input-bordered input-sm w-16 text-center"
                          min="1"
                        />
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="btn btn-sm btn-ghost"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-xl font-bold min-w-fit">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="btn btn-sm btn-ghost text-error"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="card bg-base-100 shadow-sm h-fit sticky top-10">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Order Summary</h2>
              
              <div className="space-y-3 border-b pb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between text-xl font-bold mt-4">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button className="btn btn-primary rounded-full w-full mt-6 bg-linear-to-l from-[#9514fa] to-[#4f39f6] hover:bg-linear-to-r">
                Proceed to Checkout
              </button>
              
              <button className="btn btn-outline btn-primary rounded-full w-full mt-2">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
