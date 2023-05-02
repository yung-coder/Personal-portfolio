import Head from "next/head";
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
        content="https://learn.g2.com/hubfs/IT%20Portfolio%20Management@2x.png"
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
