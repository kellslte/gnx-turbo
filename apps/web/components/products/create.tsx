import CreateProduct from "./actions/create";

export default async function CreateProductUI() {
    return (
        <div>
            <form action={CreateProduct}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input type="number" name="price" id="price" />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description"></textarea>
                </div>
                <button type="submit">Create Product</button>
            </form>
        </div>
    )
}