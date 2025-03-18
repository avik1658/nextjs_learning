export default async function getPost(id: number) {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return post.json();
}