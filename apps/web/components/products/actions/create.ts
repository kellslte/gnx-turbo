"use server";

import { revalidateTag } from "next/cache";

export default async function CreateProduct(payload: FormData) {
  await fetch(`${process.env.API_URL}/api/product`, {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(payload)),
    headers: {
      "Content-Type": "application/json",
    },
  });
    revalidateTag("products");
}
