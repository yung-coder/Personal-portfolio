import "./globals.css";

// export const metadata = {
//   title: "Portfolio",
//   description: "Made by Saksham Chandel",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta property="og:title" content="Example Page"></meta>
      <meta
        name="image"
        property="og:image"
        content="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/04/web-developer-portfolio.webp"
      ></meta>
      <meta
        property="og:description"
        content="This is just an example page."
      ></meta>
      <meta property="og:url" content="https://example.com/page.html"></meta>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <body>{children}</body>
    </html>
  );
}
