import { formatPrice } from '@/lib/store';
import type { CartItem } from '@/lib/store';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  cart: CartItem[];
  onChangeQty: (id: string, delta: number) => void;
  totalPrice: number;
  onCheckout: () => void;
}

export default function CartDrawer({ open, onClose, cart, onChangeQty, totalPrice, onCheckout }: CartDrawerProps) {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/45 z-[200] backdrop-blur-sm animate-fade-in" onClick={onClose} />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 bottom-0 w-[min(420px,92vw)] bg-white z-[201] transition-transform duration-300 flex flex-col shadow-lg ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h3 className="font-display text-xl font-semibold">Mon Panier</h3>
          <button onClick={onClose} className="w-9 h-9 rounded-full bg-bg-gray flex items-center justify-center text-muted-foreground hover:bg-primary-light hover:text-primary transition-all">✕</button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-3">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-2 text-muted-foreground">
              <img src="/placeholder.svg" alt="Panier vide" className="w-16 h-16 opacity-40" />
              <p className="font-semibold text-foreground">Votre panier est vide</p>
              <small className="text-sm">Ajoutez des produits pour commencer !</small>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex items-center gap-3 p-3 border border-border rounded-lg bg-bg-soft">
                <div className="flex-1">
                  <div className="font-semibold text-sm text-dark mb-1">{item.name}</div>
                  <div className="text-sm text-primary-dark font-semibold">{formatPrice(item.price * item.qty)}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="w-7 h-7 rounded-full bg-white border border-border flex items-center justify-center font-semibold hover:bg-primary-light hover:text-primary transition-all" onClick={() => onChangeQty(item.id, -1)}>−</button>
                  <span className="font-bold min-w-[20px] text-center text-sm">{item.qty}</span>
                  <button className="w-7 h-7 rounded-full bg-white border border-border flex items-center justify-center font-semibold hover:bg-primary-light hover:text-primary transition-all" onClick={() => onChangeQty(item.id, 1)}>+</button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="px-6 py-5 border-t border-border">
            <div className="flex justify-between items-center mb-4 text-muted-foreground">
              <span>Total</span>
              <strong className="text-xl text-primary-dark font-display">{formatPrice(totalPrice)}</strong>
            </div>
            <button
              className="w-full bg-[#25D366] text-white font-bold text-[0.95rem] py-3.5 rounded-full transition-all hover:bg-[#1ebe5c] hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(37,211,102,0.3)]"
              onClick={onCheckout}
            >
              Commander via WhatsApp 📱
            </button>
          </div>
        )}
      </div>
    </>
  );
}
