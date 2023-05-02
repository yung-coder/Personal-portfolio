import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

export default function () {
  return new ImageResponse(
    (
      <>
        <div>
          <img
            src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/04/web-developer-portfolio.webp"
            alt=""
          />
        </div>
      </>
    )
  );
}
