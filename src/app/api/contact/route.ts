import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, interest, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Pesan berhasil dikirim" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Terjadi kesalahan saat mengirim pesan" },
      { status: 500 }
    );
  }
}
