// src/services/exportService.js
import PDFDocument from "pdfkit";
import fs from "fs";
import { Document, Packer, Paragraph, TextRun } from "docx";

export const exportPlanToPDF = async (plan, outputPath = "plan.pdf") => {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument();
      const stream = fs.createWriteStream(outputPath);
      doc.pipe(stream);

      doc.fontSize(20).text(plan.idea.toUpperCase(), { align: "center" });
      doc.moveDown();

      doc.fontSize(12).text(plan.content, { align: "left" });
      doc.end();

      stream.on("finish", () => resolve(outputPath));
    } catch (error) {
      reject(error);
    }
  });
};

export const exportPlanToDocx = async (plan, outputPath = "plan.docx") => {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            children: [new TextRun({ text: plan.idea, bold: true, size: 32 })],
          }),
          new Paragraph({
            children: [new TextRun({ text: plan.content, size: 24 })],
          }),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(outputPath, buffer);
  return outputPath;
};
