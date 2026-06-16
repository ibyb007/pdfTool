import * as pdfjsLib from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.min.js?url';

// Set the worker source (critical for Vite)
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export class PDFBrowser {
  private pdfDoc: any = null;
  private numPages: number = 0;

  async loadPDF(file: File | ArrayBuffer | Uint8Array): Promise<void> {
    let data: ArrayBuffer;

    if (file instanceof File) {
      data = await file.arrayBuffer();
    } else if (file instanceof ArrayBuffer) {
      data = file;
    } else {
      data = file.buffer;
    }

    this.pdfDoc = await pdfjsLib.getDocument({ data }).promise;
    this.numPages = this.pdfDoc.numPages;
  }

  async getPage(pageNum: number) {
    if (!this.pdfDoc) throw new Error('PDF not loaded');
    return await this.pdfDoc.getPage(pageNum);
  }

  getNumPages(): number {
    return this.numPages;
  }

  async renderPage(pageNum: number, scale: number = 1.5): Promise<HTMLCanvasElement> {
    const page = await this.getPage(pageNum);
    const viewport = page.getViewport({ scale });

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d')!;

    canvas.height = viewport.height;
    canvas.width = viewport.width;

    await page.render({
      canvasContext: context,
      viewport: viewport,
    }).promise;

    return canvas;
  }

  async extractText(pageNum: number): Promise<string> {
    const page = await this.getPage(pageNum);
    const textContent = await page.getTextContent();
    return textContent.items.map((item: any) => item.str).join(' ');
  }

  async close() {
    if (this.pdfDoc) {
      await this.pdfDoc.destroy();
      this.pdfDoc = null;
    }
  }
}

// Export a singleton instance if needed
export const pdfBrowser = new PDFBrowser();
