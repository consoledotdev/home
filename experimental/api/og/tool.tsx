/* @ts-ignore */
/*import { NextRequest } from "next/server";
import { ImageResponse } from "@vercel/og";
import { Font } from "next/dist/compiled/@vercel/og/satori";

export const config = {
  runtime: "edge",
};

const width = 1200;
const height = 675;

const relToW = (ratio: number) => {
  return width * ratio;
};

const relToH = (ratio: number) => {
  return height * ratio;
};

export default async function OG(req: NextRequest) {
  const imageData = (await fetch(
    new URL("assets/og/card-tool.png", import.meta.url)
  ).then((res) => res.arrayBuffer())) as string;

  const fontData = await fetch(
    new URL("assets/fonts/Rubik-Light.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const fonts = [
    {
      name: "Rubik",
      data: fontData,
      style: "normal",
      weight: 300,
    },
  ];

  const { searchParams, protocol, host } = new URL(req.url);

  const tool = searchParams.get("tool");
  const favicon = searchParams.get("icon");
  const text = searchParams.get("text");

  // const faviconUrl = `${protocol}//${host}/img/${favicon}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "flex-start",
          justifyContent: "center",
          color: "#ffffff",
        }}
      >
        <img
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
          src={imageData}
          alt="Console"
          width={relToW(1)}
          height={relToH(1)}
        />
        <div
          style={{
            display: "flex",
            flexFlow: "column nowrap",
            marginTop: relToW(0.1067),
            marginLeft: relToW(0.067),
            marginRight: relToW(0.067),
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              flexFlow: "row nowrap",
              alignItems: "center",
              marginBottom: relToW(0.015),
            }}
          >
            {/* <span
              style={{
                borderRadius: relToW(0.02),
                overflow: "hidden",
                width: relToW(0.1067),
                height: relToW(0.1067),
                marginRight: relToW(0.053),
                background: "#f1f2f6",
              }}
            >
              <img
                src={faviconUrl}
                alt={tool || undefined}
                width={relToW(0.1067)}
                height={relToW(0.1067)}
              />
            </span>
            <h1
              style={{
                fontSize: relToW(0.069),
                marginBottom: 0,
              }}
            >
              {tool}
            </h1>
          </div>
          <p
            style={{
              fontSize: relToW(0.029),
              color: "#b5b6bf",
              lineHeight: "1.3em",
            }}
          >
            {text}
          </p>
        </div>
      </div>
    ),
    {
      width: width,
      height: height,
      fonts: fonts as Font[],
    }
  );
}*/
