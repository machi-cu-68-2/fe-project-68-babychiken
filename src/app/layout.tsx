// app/layout.tsx
import "./globals.css";
import TopMenu from "@/components/TopMenu";
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
        <TopMenu/>
        <div className="pt-[50px]">
          {children}
        </div>
      </body>
    </html>
  );
}