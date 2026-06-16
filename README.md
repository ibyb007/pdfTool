<p align="center">
  <img src=".github/assets/logo.svg" alt="PDF Tool logo" width="120" height="120">
</p>

<h1 align="center">PDF Tool</h1>

<p align="center">
  <strong>Open-source, privacy-first PDF tools that run locally in your browser.</strong>
  <br>
  Merge, split, convert, sign, clean, OCR, compare, and secure PDFs with no server uploads.
</p>

<p align="center">
  <a href="./LICENSE">
    <img alt="MIT license" src="https://img.shields.io/badge/license-MIT-111827?style=flat-square">
  </a>
  <img alt="Open source" src="https://img.shields.io/badge/open%20source-yes-059669?style=flat-square">
  <img alt="No server uploads" src="https://img.shields.io/badge/PDF%20uploads-none-10b981?style=flat-square">
  <img alt="Browser processing" src="https://img.shields.io/badge/processing-browser%20local-2563eb?style=flat-square">
  <img alt="React" src="https://img.shields.io/badge/React-18-149eca?style=flat-square&logo=react&logoColor=white">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript&logoColor=white">
  <img alt="Vite" src="https://img.shields.io/badge/Vite-6-646cff?style=flat-square&logo=vite&logoColor=white">
</p>

---
## Why PDF Tool

Online PDF tools often require uploading sensitive documents. PDF Tool processes everything **locally in your browser** — no data leaves your device.

Perfect for contracts, invoices, tax forms, IDs, resumes, and any private documents.

**Private by default**  
**Open source**  
**Browser local**  
**No account required**

---

## Privacy-first by design

PDF Tool is a static web app. All PDF operations happen client-side.

| User concern              | PDF Tool answer                                      |
|---------------------------|------------------------------------------------------|
| Will my PDF be uploaded?  | No — files stay on your device                       |
| Where does processing happen? | In your browser                                      |
| Do I need an account?     | No                                                   |
| Can I inspect the code?   | Yes — fully open source (MIT)                        |
| Can I self-host?          | Yes — build and serve the static files               |

### Privacy guarantees
- PDFs never leave your device for core operations
- Built with PDF.js, pdf-lib, jsPDF, Tesseract.js and other client-side libraries
- No login, no cloud storage, no third-party conversion APIs

---

## Toolkit

| Arrange                  | Convert and create              | Review and secure              |
|--------------------------|---------------------------------|--------------------------------|
| Merge PDFs               | Compress PDFs                   | View PDFs                      |
| Split PDFs               | PDF to JPG, PNG, WebP           | Edit PDF overlays              |
| Reorder pages            | Image to PDF                    | Compare PDFs                   |
| Rotate pages             | Make PDF from photos            | Extract text and OCR           |
| Delete pages             | Extract embedded images         | View and edit metadata         |
| Extract selected pages   |                                 | Remove metadata                |
| Add page numbers         |                                 | Remove annotations             |
| Add watermarks           |                                 | Sanitize PDFs                  |
| Flatten form fields      |                                 | Sign PDFs                      |
| Crop margins             |                                 | Protect PDFs                   |
| Add headers and footers  |                                 | Unlock PDFs                    |
| Remove blank pages       |                                 | Repair PDFs                    |

---

## Run locally

**Prerequisites**: Node.js 18 or newer.

```bash
npm install
npm run dev
npm run lint
npm run test:catalog
npm run build
