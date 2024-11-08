import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iphone ${params.productId}`);
    }, 3000);
  });
  return {
    title: `Product ${title}`,
  };
};

type props = { params: { productId: string } };

export default function productDetails({ params }: props) {
  return <h1>Product details page {params.productId}...</h1>;
}
