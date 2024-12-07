import CreateProductUI from "../components/products/create";
import ViewProductsUI from "../components/products/view";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <CreateProductUI />
      <ViewProductsUI />
    </>
  );
}
