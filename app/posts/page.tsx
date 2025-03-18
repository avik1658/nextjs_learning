import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

interface Post {
    id: number;
    title: string;
}

export default async function Posts() {
    const posts: Post[] = await getAllPosts();
    console.log(posts);

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id} className="mt-10 border-2 border-white px-2 rounded-lg hover:bg-amber-400 duration-300">
                        <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
