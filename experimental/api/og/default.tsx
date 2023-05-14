/* @ts-ignore */
/*
import { NextRequest } from "next/server";
import { ImageResponse } from "@vercel/og";
import path from "path";
import fs from "fs";

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
    new URL("assets/og/card-default.png", import.meta.url)
  ).then((res) => res.arrayBuffer())) as string;

  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={imageData}
          alt="Console"
          width={relToW(1)}
          height={relToH(1)}
        />
      </div>
    ),
    {
      width: width,
      height: height,
    }
  );
}*/
