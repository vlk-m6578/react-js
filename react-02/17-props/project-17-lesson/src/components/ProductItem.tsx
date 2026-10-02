import { useState } from "react"

export function ProductItem({ product }) {
  console.log('🧺 ProductItem')
  const [inCart, setInCart] = useState(false);

  return (
    <div style={{ border: '3px solid black', width: '200px', padding: '10px' }}>
      <div>id: {product.id}</div>
      <div>name: {product.name}</div>
      <div>price: {product.price}</div>
      <div>category: {product.category}</div>

      <button style={{ backgroundColor: inCart ? 'yellow' : 'transparent' }} onClick={() => {
        if (inCart) {
          alert('Товар удален из корзины');
          setInCart(false);
        } else {
          alert('Товар добавлен в корзину');
          setInCart(true);
        }
      }}>{inCart ? 'товар в корзине' : 'добавить в корзину'}</button>
    </div>
  )
}