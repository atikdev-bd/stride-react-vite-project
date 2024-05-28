import SingleProduct from "./SingleProduct";

export default function Products() {
  return (
    <>
      <h1 className="text-4xl font-bold my-6 text-center" >Our Products</h1>
      <div className="flex gap-4 mx-8">
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </div>
    </>
  );
}
