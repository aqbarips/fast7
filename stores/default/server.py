import http.server
import json
import os
import uuid
import base64
import mimetypes
import io
from urllib.parse import urlparse

UPLOAD_DIR = 'images'
PORT = 8080

class UploadHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_cors_headers()
        self.end_headers()

    def send_cors_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')

    def do_POST(self):
        parsed = urlparse(self.path)
        if parsed.path == '/api/upload':
            try:
                content_len = int(self.headers.get('Content-Length', 0))
                body = self.rfile.read(content_len)
                data = json.loads(body.decode('utf-8'))

                raw_data = data.get('data', '')
                filename = data.get('filename', '')
                if not filename:
                    ext = 'png'
                    if raw_data.startswith('data:'):
                        mime = raw_data.split(';')[0].split(':')[1]
                        ext = mimetypes.guess_extension(mime) or 'png'
                    filename = str(uuid.uuid4()) + ext

                if ',' in raw_data:
                    raw_data = raw_data.split(',')[1]

                file_bytes = base64.b64decode(raw_data)

                os.makedirs(UPLOAD_DIR, exist_ok=True)
                filepath = os.path.join(UPLOAD_DIR, filename)
                with open(filepath, 'wb') as f:
                    f.write(file_bytes)

                self.send_response(200)
                self.send_cors_headers()
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({
                    'url': 'images/' + filename,
                    'filename': filename
                }).encode('utf-8'))
            except Exception as e:
                self.send_response(500)
                self.send_cors_headers()
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'error': str(e)}).encode('utf-8'))
        else:
            self.send_response(404)
            self.end_headers()

    def do_GET(self):
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

if __name__ == '__main__':
    server = http.server.HTTPServer(('0.0.0.0', PORT), UploadHTTPRequestHandler)
    print(f'🚀 Server running at: http://localhost:{PORT}')
    print(f'📁 Admin panel: http://localhost:{PORT}/admin.html')
    print(f'🏪 Store front:  http://localhost:{PORT}/index.html')
    print(f'📸 Upload API:  http://localhost:{PORT}/api/upload')
    server.serve_forever()
