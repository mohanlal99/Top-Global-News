import { NextRequest, NextResponse } from "next/server";

import s3 from "@/config/aws-config";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const image = formData.get("image") as File;

    if (!image) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME!,
      Key: image.name,
      Body: buffer,
      ContentType: image.type,
    };

    const response = await s3.upload(params).promise();

    // Add CORS headers
    return NextResponse.json(
      { message: "File Upload success", response },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*", // Allow all origins or specify the allowed domain
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      },
    );
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 409 });
  }
}

// Handle the OPTIONS preflight request for CORS
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Adjust to specific domain if needed
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    },
  );
}

// import { NextRequest, NextResponse } from "next/server";
// import { v4 as uuidv4 } from "uuid";

// import s3 from "@/config/aws-config";

// export async function POST(req: NextRequest) {
//   try {
//     const formData = await req.formData();
//     const image = formData.get("image");

//     // Validate image existence
//     if (!image || !(image instanceof File)) {
//       return NextResponse.json(
//         { error: "No image file provided" },
//         { status: 400 }, // Bad Request
//       );
//     }

//     // Validate file type and size
//     const allowedTypes = ["image/jpeg", "image/png"];
//     const maxSize = 3 * 1024 * 1024; // 5 MB limit

//     if (!allowedTypes.includes(image.type)) {
//       return NextResponse.json(
//         { error: "Invalid file type. Only JPEG and PNG are allowed." },
//         { status: 400 },
//       );
//     }

//     if (image.size > maxSize) {
//       return NextResponse.json(
//         { error: "File size exceeds the 5 MB limit." },
//         { status: 400 },
//       );
//     }

//     const arrayBuffer = await image.arrayBuffer();
//     const buffer = Buffer.from(arrayBuffer);

//     const params = {
//       Bucket: process.env.AWS_S3_BUCKET_NAME!,
//       Key: `${image.name}`, // Use a unique key
//       Body: buffer,
//       ContentType: image.type,
//     };

//     const response = await s3.upload(params).promise();

//     return NextResponse.json(
//       { message: "File Upload successful", response },
//       { status: 200 },
//     );
//   } catch {
//     return NextResponse.json(
//       { error: "File upload failed. Please try again later." },
//       { status: 500 }, // Internal Server Error
//     );
//   }
// }

// import { NextRequest, NextResponse } from "next/server";

// import s3 from "@/config/aws-config";

// export async function POST(req: NextRequest) {
//   try {
//     const formData = await req.formData();
//     const image = formData.get("image") as File;
//     const arrayBuffer = await image.arrayBuffer();
//     const buffer = Buffer.from(arrayBuffer);
//     const params = {
//       Bucket: process.env.AWS_S3_BUCKET_NAME!,
//       Key: image.name,
//       Body: buffer,
//       ContentType: image.type,
//     };
//     const response = await s3.upload(params).promise();

//     return NextResponse.json(
//       { message: "File Upload success", response },
//       { status: 200 },
//     );
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 409 });
//   }
// }
