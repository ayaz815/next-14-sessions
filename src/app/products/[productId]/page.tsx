export default function productDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>Product details page {params.productId}...</h1>;
}
