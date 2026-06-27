import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Home() {
  const posts = getAllPosts() 
  const tech = posts.filter((p: any) => p.category === "tecnologia");
  const business = posts.filter((p: any) => p.category === "negócios");

  return (
    <main>

      {/* HERO */}
      <section style={{ marginBottom: "40px" }}>
        <Link href={`/blog/${main.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
          <h1 style={{ fontSize: "30px" }}>{main.title}</h1>
          <p>{main.date}</p>
        </Link>
      </section>

      {/* TECNOLOGIA */}
      <section style={{ marginBottom: "32px" }}>
        <h2>Tecnologia</h2>
        {tech.map((post: any) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <p>{post.title}</p>
          </Link>
        ))}
      </section>

      {/* NEGÓCIOS */}
      <section>
        <h2>Negócios</h2>
        {business.map((post: any) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <p>{post.title}</p>
          </Link>
        ))}
      </section>

    </main>
  );
}
  const posts = getAllPosts();

  const main = posts[0];
  const tech = posts.filter((p: any) => p.category === "tecnologia");
