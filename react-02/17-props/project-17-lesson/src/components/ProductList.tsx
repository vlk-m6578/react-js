import { ProductItem } from "./ProductItem";

export function ProductList({ items }) {
  console.log('📋 ProductList')
  return (
    <div style={{display: 'flex', gap: '10px'}}>
      {items.map(item => <ProductItem key={item.id} product={item}/>)}
    </div>
  )
}