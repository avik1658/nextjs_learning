import getPost from "@/lib/getPost";

interface Post {
    id: number;
    title: string;
}

type paramsType = Promise<{ id: number }>;

export async function generateMetadata(props: { params: paramsType }){
    const { id } = await props.params;
    const post: Post = await getPost(id);

    return{
        title: post.title,
        description: `This is the post with ID ${id}`,
    }
}


export default async function PostPage(props: { params: paramsType }){
    const { id } = await props.params;
    const post: Post = await getPost(id);

    return (
        <div>
            <h1>Post</h1>
            <p>This is the Post page</p>
            <p>Post ID: {post.id}</p>
            <p>Post Title: {post.title}</p>
        </div>
    );
}
