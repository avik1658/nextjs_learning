import Link from "next/link"

export default function Blogs() {
    const blogs =[{
        id: 1,
        title: "Blog 1",
        content: "This is the first blog"
    },{
        id: 2,
        title: "Blog 2",
        content: "This is the second blog"
    },{
        id: 3,
        title: "Blog 3",
        content: "This is the third blog"
    }]
    return (
        <div>
            <h1>Blog</h1>
            <p>This is the blog page</p>
            {blogs.map((blog) => (
                <Link href={`/blog/${blog.id}`} key={blog.id}>
                    <div className="border p-4 my-4 rounded-2xl hover:bg-gray-800 duration-300">
                        <h2>{blog.title}</h2>
                        <p>{blog.content}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}