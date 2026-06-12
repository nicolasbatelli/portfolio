import { NextResponse } from "next/server";

/**
 * STL Upload API — Future Implementation
 *
 * This endpoint is a stub for future file upload functionality.
 * When ready to implement:
 *
 * 1. Install @vercel/blob: npm install @vercel/blob
 * 2. Add BLOB_READ_WRITE_TOKEN to Vercel environment variables
 * 3. Implement upload logic:
 *
 *    import { put } from '@vercel/blob';
 *
 *    export async function POST(request: Request) {
 *      const formData = await request.formData();
 *      const file = formData.get('file') as File;
 *
 *      if (!file || !file.name.endsWith('.stl')) {
 *        return NextResponse.json({ error: 'Invalid file' }, { status: 400 });
 *      }
 *
 *      const blob = await put(`models/${file.name}`, file, { access: 'public' });
 *
 *      // Store metadata in a database or content file
 *      return NextResponse.json({ url: blob.url });
 *    }
 *
 * 4. Add authentication (e.g. NextAuth or API key) to restrict uploads
 * 5. Update content/models.ts or a database with new model metadata
 */

export async function POST() {
  return NextResponse.json(
    {
      error: "Upload not implemented yet",
      message:
        "STL uploads are planned for a future release. For now, add STL files to public/models/ and register them in content/models.ts.",
    },
    { status: 501 }
  );
}

export async function GET() {
  return NextResponse.json({
    status: "stub",
    message: "Upload endpoint reserved for future Vercel Blob integration.",
  });
}
