import "./globals.css";

export const metadata = {
  title: "Portfolio",
  description: "Made by Saksham Chandel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        property="og:image"
        content="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/04/web-developer-portfolio.webp"
      ></meta>
      <body>{children}</body>
    </html>
  );
}
