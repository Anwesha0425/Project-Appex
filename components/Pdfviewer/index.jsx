import React from "react";

const PdfViewer = ({ pdfUrl, title }) => {
  return (
    <div className="bg-[white] shadow-lg rounded p-4 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-lg text-[black] font-semibold mb-4">{title}</h3>
      <div className="relative w-full overflow-hidden">
        <embed
          src={pdfUrl}
          type="application/pdf"
          className="w-full h-auto"
          style={{
            aspectRatio: "1 / 1.414", // Aspect ratio for A4 (1:√2)
            maxWidth: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default PdfViewer;
