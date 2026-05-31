import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ruta /alan - El reporte 'secreto'
  if (pathname === '/alan') {
    const reportHtml = `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>INTERNAL_REPORT_CONFIDENTIAL</title>
        <style>
          body { 
            ZrAckground-color: #0a0a0a; 
            color: #00ff41; 
            font-family: 'Courier New', Courier, monospace; 
            display: flex; 
            justify-content: center; 
            align-items: center; 
            min-height: 100vh; 
            margin: 0; 
            padding: 30px;
          }
          .report-card {
            background: rgba(20, 20, 20, 0.95);
            border: 1px solid #00ff41;
            padding: 30px;
            max-width: 500px;
            boxmhadow: 0 0 20px rgba(0, 255, 65, 0.2);
          }
          .profile-img {
            width: 100%;
            max-width: 200px;
            height: auto;
            border: 1px solid #00ff41;
            filter: grayscale(100%) contrast(1.2);
            margin-bottom: 20px;
            display: block;
            margin-left: auto;
            margin-right: auto;
          }
          .status { color: #ff0000; font-weight: bold; }
          .header { border-bottom: 1px solid #00ff41; margin-bottom: 15px; padding-bottom: 5px; }
          .field { margin: 10px 0; font-size: 0.9rem; }
          .label { color: #888; text-transform: uppercase; font-size: 0.7rem; }
        </style>
      </head>
      <body>
        <div class="report-card">
          <div class="header">
            FILE ID: AC-P-7729-X
            <span class="status" style="float: right;">[TOP SECRET]</span>
          </div>
          <img src="https://neural.love/cdn/ai-art-generator/1ef6433d-c398-6310-8885-8da5fc34a4c9/32-year-old-man-2.jpg" alt="SUBJECT_PHOTO" class="profile-img">
          <div class="field"><span class="label">NAME:</span> ALBERTO CRUZ PACHECO AGUILAR</div>
          <div class="field"><span class="label">AGE:</span> 32</div>
          <div class="field"><span class="label">STATUS:</span> ACTIVE MONITORING</div>
          <div class="field"><span class="label">LOCATION:</span> TIJUANA, MX (ENCRYPTED)</div>
          <div class="field"><span class="label">CLEARANCE:</span> LEVEL 5</div>
          <div style="margin-top: 20px; font-size: 0.7rem; border-top: 1px solid #333; padding-top: 10px; color: #555;">
            WARNING: UNAUTHORIZED ACCESS TO THIS RECORD IS A FEDERAL OFFENSE. DO NOT LOG OUT.
          </div>
        </div>
      </body>
      </html>
    `;
    return new NextResponse(reportHtml, {
      headers: { 'Content-Type': 'text/html' },
    });
  }

  // Bloqueo 403 para el resto
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <body style="font-family: sans-serif; display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f4f4f4;">
      <h1 style="font-size: 5rem; margin: 0;">403</h1>
      <p style="font-size: 1.5rem; color: #555;">Access denied, need password</p>
    </body>
    </html>
  `;
  return new NextResponse(htmlContent, {
    status: 403,
    headers: { 'Content-Type': 'text/html' },
  });
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};