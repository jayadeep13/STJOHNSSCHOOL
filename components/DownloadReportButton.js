"use client";

import { useState } from "react";
import { Download, Loader2 } from "lucide-react";

const PAGE_W = 595.28;
const PAGE_H = 841.89;
const MARGIN = 48;
const CONTENT_W = PAGE_W - MARGIN * 2;

function toDataURL(url) {
  return fetch(url)
    .then((res) => res.blob())
    .then(
      (blob) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        })
    );
}

function loadImageSize(dataUrl) {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
    img.onerror = () => resolve({ w: 4, h: 3 });
    img.src = dataUrl;
  });
}

function formatFromDataUrl(dataUrl) {
  const match = /^data:image\/(\w+);/.exec(dataUrl);
  const ext = match ? match[1].toUpperCase() : "PNG";
  return ext === "JPG" ? "JPEG" : ext;
}

function ensureSpace(doc, y, needed) {
  if (y + needed > PAGE_H - MARGIN) {
    doc.addPage();
    return MARGIN;
  }
  return y;
}

function splitHighlight(h) {
  const idx = h.indexOf(" — ");
  if (idx === -1) return { date: null, text: h };
  return { date: h.slice(0, idx), text: h.slice(idx + 3) };
}

async function buildReportPdf(report) {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  let y = MARGIN;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(26, 22, 17);
  doc.text("St. John's School — Annual Report", MARGIN, y);
  y += 22;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10.5);
  doc.setTextColor(120, 110, 95);
  doc.text("The Joshua Foundation • Dantherapalli, Giddalur", MARGIN, y);
  y += 36;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(34);
  doc.setTextColor(196, 18, 48);
  doc.text(String(report.year), MARGIN, y);
  y += 20;

  doc.setDrawColor(196, 18, 48);
  doc.setLineWidth(1.25);
  doc.line(MARGIN, y, PAGE_W - MARGIN, y);
  y += 28;

  if (report.events) {
    for (const event of report.events) {
      y = ensureSpace(doc, y, 60);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(9.5);
      doc.setTextColor(196, 18, 48);
      doc.text(event.date.toUpperCase(), MARGIN, y);
      y += 16;

      doc.setFont("helvetica", "bold");
      doc.setFontSize(15);
      doc.setTextColor(26, 22, 17);
      const titleLines = doc.splitTextToSize(event.title, CONTENT_W);
      y = ensureSpace(doc, y, titleLines.length * 18);
      doc.text(titleLines, MARGIN, y);
      y += titleLines.length * 18 + 8;

      const images = event.images || (event.image ? [event.image] : []);
      for (const src of images) {
        try {
          const dataUrl = await toDataURL(src);
          const { w, h } = await loadImageSize(dataUrl);
          const imgW = CONTENT_W;
          const rawH = (h / w) * imgW;
          const imgH = Math.min(rawH, 220);
          const finalW = imgH === rawH ? imgW : (w / h) * imgH;
          y = ensureSpace(doc, y, imgH + 10);
          doc.addImage(dataUrl, formatFromDataUrl(dataUrl), MARGIN, y, finalW, imgH);
          y += imgH + 12;
        } catch {
          // image failed to load — continue without it
        }
      }
      if (images.length) y += 2;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(10.5);
      doc.setTextColor(60, 55, 48);
      for (const para of event.body) {
        const lines = doc.splitTextToSize(para, CONTENT_W);
        y = ensureSpace(doc, y, lines.length * 14);
        doc.text(lines, MARGIN, y);
        y += lines.length * 14 + 8;
      }

      if (event.note) {
        y = ensureSpace(doc, y, 30);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(9);
        doc.setTextColor(196, 18, 48);
        const headingLines = doc.splitTextToSize(event.note.heading.toUpperCase(), CONTENT_W);
        y = ensureSpace(doc, y, headingLines.length * 13);
        doc.text(headingLines, MARGIN, y);
        y += headingLines.length * 13 + 4;

        doc.setFont("helvetica", "italic");
        doc.setFontSize(10);
        doc.setTextColor(80, 74, 66);
        const noteLines = doc.splitTextToSize(event.note.body, CONTENT_W);
        y = ensureSpace(doc, y, noteLines.length * 13);
        doc.text(noteLines, MARGIN, y);
        y += noteLines.length * 13 + 10;
      }

      y += 16;
    }
  } else if (report.highlights) {
    for (const h of report.highlights) {
      const { date, text } = splitHighlight(h);
      y = ensureSpace(doc, y, 32);
      if (date) {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(10);
        doc.setTextColor(196, 18, 48);
        doc.text(date, MARGIN, y);
        y += 13;
      }
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10.5);
      doc.setTextColor(60, 55, 48);
      const lines = doc.splitTextToSize(text, CONTENT_W);
      y = ensureSpace(doc, y, lines.length * 14);
      doc.text(lines, MARGIN, y);
      y += lines.length * 14 + 14;
    }
  }

  return doc;
}

export default function DownloadReportButton({ report, className = "" }) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const doc = await buildReportPdf(report);
      doc.save(`St-Johns-School-Annual-Report-${report.year}.pdf`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className={`inline-flex items-center gap-2 rounded-full bg-brick px-5 py-3 text-sm font-semibold text-paper shadow-lg shadow-brick/20 transition-all hover:-translate-y-0.5 hover:bg-brick-dark disabled:opacity-60 disabled:hover:translate-y-0 ${className}`}
    >
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Preparing PDF&hellip;
        </>
      ) : (
        <>
          <Download className="h-4 w-4" />
          Download {report.year} Report
        </>
      )}
    </button>
  );
}
