export const dynamic = "force-dynamic"; // static by default, unless reading the request
import { NextResponse } from "next/server";

import { createWorker } from "tesseract.js";

const testImages = {
  daiya:
    "https://drive.google.com/thumbnail?id=1CCJOcbWRpTRX6JXAfY4gEXDlFq45X2vJ&sz=w1000",
};

export async function GET(request: Request) {
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
