import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
        <div>
          <p><Link href="/posts">Meu Post...</Link></p>
          <p><Link href="/posts/post1">Post1...</Link></p>
          <p><Link href="/posts/post2">Post2...</Link></p>
          <p><Link href="/posts/post3">Post3...</Link></p>
        </div>
    </div>
  )
}
