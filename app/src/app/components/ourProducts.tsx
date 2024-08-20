import ProductCard from "./productCard";
import product_01 from "../../../public/images/products/product_01.jpeg"

export default function OurProducts() {
  return (
    <>
        <div className="container mx-auto my-8">
            <h1 className="text-primary font-bold text-3xl text-center my-6 ">Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto">

                <ProductCard imageLink={product_01} />
                <ProductCard imageLink={product_01} />
                <ProductCard imageLink={product_01} />
                <ProductCard imageLink={product_01} />
                <ProductCard imageLink={product_01} />
                <ProductCard imageLink={product_01} />
                <ProductCard imageLink={product_01} />
                <ProductCard imageLink={product_01} />
                <ProductCard imageLink={product_01} />
                <ProductCard imageLink={product_01} />
                <ProductCard imageLink={product_01} />
                <ProductCard imageLink={product_01} />

            </div>
        </div>
    </>
  )
}
