import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Home() {

  const posts = getAllPosts() || [];

  const main = posts.length > 0 ? posts[0] : null;
  const tech = posts.filter((p: any) => p.category === "tecnologia");
  const business = posts.filter((p: any) => p.category === "negócios");

  return (
    <main>

      {/* HERO */}
      {main && (
        <section style={{ marginBottom: "30px" }}>
          <Link href={`/blog/${main.slug}`}>
            <div className="hero">
              <div className="hero-overlay">
                <h1>{main.title}</h1>
                <p>{main.date}</p>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* GRID PRINCIPAL */}
      <section className="cnn-grid">

        {/* COLUNA PRINCIPAL */}
        <div className="main-column">

          <h2>🖥 Tecnologia</h2>

          {tech.length === 0 ? (
            <p style={{ color: "#999" }}>Sem conteúdo</p>
          ) : (
            tech.map((post: any) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="card large">{post.title}</div>
              </Link>
            ))
          )}

        </div>

        {/* SIDEBAR */}
        <div className="sidebar">

          <h2>💼 Negócios</h2>

          {business.length === 0 ? (
            <p style={{ color: "#999" }}>Sem conteúdo</p>
          ) : (
            business.map((post: any) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="card small">{post.title}</div>
              </Link>
            ))
          )}

          <div className="widget">
            <h3>🔥 Mais lidas</h3>
            {posts.slice(0, 3).map((post: any) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <p className="mini-link">{post.title}</p>
              </Link>
            ))}
          </div>

        </div>

      </section>

      {/* 🔥 NOVA SEÇÃO (remove o vazio) */}
      <section style={{ marginTop: "40px" }}>
        <h2>🆕 Últimas notícias</h2>

        <div className="news-grid">
          {posts.map((post: any) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="card news">
                <strong>{post.title}</strong>
                <span>{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ESTILOS */}
      <style>{`
        .hero {
          height: 320px;
          border-radius: 12px;
          background: linear-gradient(120deg,#111,#333);
          display: flex;
          align-items: flex-end;
          padding: 20px;
          color: #fff;
        }

        .cnn-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 30px;
        }

        .news-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 20px;
        }

        .main-column {
          display: flex;
          flex-direction: column;
        }

        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .card.large {
          padding: 20px;
          border-radius: 10px;
          border: 1px solid #ddd;
          margin-bottom: 16px;
          font-size: 18px;
          background: #fff;
        }

        .card.small {
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #eee;
          background: #fafafa;
        }

        .card.news {
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #eee;
          background: #fff;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .widget {
          background: #111;
          color: #fff;
          padding: 16px;
          border-radius: 10px;
        }

        .mini-link {
          margin: 6px 0;
          font-size: 14px;
        }

        .mini-link:hover {
          text-decoration: underline;
        }
      `}</style>

    </main>
  );
}