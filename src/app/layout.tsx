// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "My Next App",
  description: "Generated with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "1rem", background: "#eee" }}>
          <h1>My App</h1>
        </header>

        <main style={{ padding: "1rem" }}>
          {children}
        </main>

        <footer style={{ padding: "1rem", background: "#eee" }}>
          <p>© 2026 My App</p>
        </footer>
      </body>
    </html>
  );
}