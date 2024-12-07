import { Product, ProductResponse } from "@repo/types";

export default async function ViewProductsUI() {
    const res = await fetch(`${process.env.API_URL}/api/product`, {
        next: {
            tags: ["products"]
        }
    });

    const { data }: ProductResponse = await res.json();
    
    const products: Product[] = data.products;

    return (
        <div>
            <h1>All Products</h1>
            <div>
                {
                    products.map(product => (
                        <div key={product.id}>
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p>{product.price}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}