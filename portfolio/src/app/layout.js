import Head from "next/head";
import "./globals.css";

// export const metadata = {
//   title: "Portfolio",
//   description: "Made by Saksham Chandel",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta property="og:title" content="Portfolio Saksham Chandel"></meta>
      <meta
        name="image"
        property="og:image"
        content="https://assets.justinmind.com/wp-content/uploads/2021/11/web-design-portfolio-768x492.png"
      ></meta>
      <meta
        property="og:description"
        content="Hey, its my portfolio page"
      ></meta>
      <body>{children}</body>
    </html>
  );
}
