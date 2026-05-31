import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Aquí definimos el contenido HTML del error
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <body style="font-family: sans-serif; display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f4f4f4;">
      <h1 style="font-size: 5rem; margin: 0;">403</h1>
      <p style="font-size: 1.5rem; color: #555;">Access denied, need password</p>
    </body>
    </html>
  `;

  // Retornamos la respuesta con el estado 403
  return new NextResponse(htmlContent, {
    status: 403,
    headers: { 'Content-Type': 'text/html' },
  });
}

// Configuración para que se aplique a todas las rutas
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
