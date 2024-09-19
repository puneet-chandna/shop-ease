import ProductList from '../../components/ProductList'

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Products</h2>
      <ProductList />
    </div>
  )
}