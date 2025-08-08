import { NextResponse } from "next/server"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export async function GET() {
  const filePath = join(process.cwd(), "app", "resources", "NeurQ AI - QS-GRC.pdf")
  try {
  const data = await readFile(filePath)
  // Convert Node Buffer to Uint8Array for the web Response API
  const body = new Uint8Array(data)
  return new NextResponse(body, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=neurq-ai-qs-grc.pdf",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    })
  } catch (e) {
    return new NextResponse("Not found", { status: 404 })
  }
}
