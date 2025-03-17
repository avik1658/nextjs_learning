import { notFound } from "next/navigation";

export default function BlogPage({ params }: { params: { id: number } }) {  
    if(params.id>3) return notFound();
    return <div>The blog id is {params.id}</div>;  
}
