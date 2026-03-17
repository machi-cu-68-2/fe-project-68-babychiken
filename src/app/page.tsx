// app/page.tsx
'use client'
export default function HomePage() {
  return (
    <div>
      <h2>Welcome to My Next.js App 🚀</h2>
      <p>This is the homepage.</p>

      <button
        onClick={() => alert("Hello from Next.js!")}
        style={{
          padding: "0.5rem 1rem",
          marginTop: "1rem",
          cursor: "pointer",
        }}
      >
        Click Me
      </button>
    </div>
  );
}