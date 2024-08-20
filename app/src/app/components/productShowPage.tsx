import Image from 'next/image';
import product_01 from "../../../public/images/products/product_01.jpeg"
export default function ProductShowPage() {
  return (
    <>
    <div className="container mx-auto my-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image Section */}
        <div className="w-full md:w-1/2">
            <Image
                className="cursor-pointer"
                src={product_01}
                width={150}
                height={150}
                alt="product_01"
            />
        </div>

        {/* Product Details Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Product Name</h2>
          <p className="text-gray-700 mb-4">
            Detailed description of the product goes here. It should provide
            all the necessary information that a customer would need.
          </p>
          <p className="text-lg font-semibold mb-4">Price: $XX.XX</p>
          <button className="bg-primary text-white px-4 py-2 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </>
  )
}
