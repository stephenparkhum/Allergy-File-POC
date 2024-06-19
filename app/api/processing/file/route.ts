export const dynamic = "force-dynamic"; // static by default, unless reading the request
import { NextResponse } from "next/server";
import siteData from "@/data/appData";

import { createWorker } from "tesseract.js";

export async function GET(request: Request) {
  const { testImages } = siteData;
  const getText = async () => {
    const worker = await createWorker("eng");
    const ret = await worker.recognize(testImages.daiya);

    await worker.terminate();
    return ret;
  };

  const text = await getText().then((d) => d.data);

  console.log(text);

  return new NextResponse(text.text);
}
