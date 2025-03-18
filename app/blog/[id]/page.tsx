import { notFound } from "next/navigation";

type paramsType = Promise<{ id: number }>;

export default async function BlogPage(props: { params: paramsType }){  
    const { id } = await props.params;
    if(id>3) return notFound();
    return <div>The blog id is {id}</div>;  
}
