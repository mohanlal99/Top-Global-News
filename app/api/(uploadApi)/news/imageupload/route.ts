import { NextRequest, NextResponse } from "next/server";

import s3 from "@/config/aws-config";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const image = formData.get("image") as File;
    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME!,
      Key: image.name,
      Body: buffer,
      ContentType: image.type,
    };
    const response = await s3.upload(params).promise();

    return NextResponse.json(
      { message: "File Upload success", response },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 409 });
  }
}
