import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  const data = { response: 'Dummy response from the server ?' };

  return NextResponse.json({ data });
}

export async function POST(request: NextRequest) {
  return NextResponse.json({ message: 'You just hit the POST endpoint' });
}
