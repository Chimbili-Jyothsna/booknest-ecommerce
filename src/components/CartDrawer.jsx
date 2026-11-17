import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
export default function CartDrawer({ open, onClose, items, onChangeQty, onRemove }) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  if (!open) return null
  return <div className="drawer-backdrop" onMouseDown={e => { if (e.target === e.currentTarget) onClose() }}>
    <aside className="cart-drawer" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <div className="drawer-head"><div><span className="eyebrow">YOUR BAG</span><h2>Shopping cart</h2></div><button className="icon-button" onClick={onClose} aria-label="Close cart"><X/></button></div>
      {!items.length ? <div className="cart-empty"><ShoppingBag size={36}/><h3>Your cart is waiting</h3><p>Good books are just a browse away.</p><button className="primary-button" onClick={onClose}>Explore books</button></div> :
        <>
          <div className="cart-items">{items.map(item => <div className="cart-item" key={item.id}>
            <img src={item.cover} alt=""/>
            <div className="cart-item-info"><b>{item.title}</b><small>{item.author}</small><strong>₹{(item.price * item.quantity).toLocaleString('en-IN')}</strong>
              <div className="qty-control"><button onClick={() => onChangeQty(item.id, -1)} aria-label="Decrease quantity"><Minus size={13}/></button><span>{item.quantity}</span><button onClick={() => onChangeQty(item.id, 1)} aria-label="Increase quantity"><Plus size={13}/></button><button className="remove-item" onClick={() => onRemove(item.id)} aria-label="Remove item"><Trash2 size={14}/></button></div>
            </div>
          </div>)}</div>
          <div className="cart-summary"><div><span>Subtotal</span><b>₹{total.toLocaleString('en-IN')}</b></div><small>Shipping and taxes calculated at checkout.</small><button className="primary-button checkout-button" onClick={() => alert('Demo only — checkout is not connected.')}>Continue to checkout <span>→</span></button><p className="demo-note">Demo storefront · No payment will be collected</p></div>
        </>}
    </aside>
  </div>
}