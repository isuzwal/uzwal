"use client";
import { useState } from "react";
import { Document, Page ,pdfjs} from "react-pdf";
import 'react-pdf/dist/Page/TextLayer.css';

if (typeof window !== "undefined") {
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
}
 const Reusme = () => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div className=" flex justify-center items-center py-4 ">
       <div className="mx-auto w-full  overflow-auto h-[700px] shadow-lg p-4 rounded-lg max-w-3xl scrollbar-hide">
      <Document file="uzwal.pdf" onLoadSuccess={onDocumentLoadSuccess}     loading="Loading pdf....">
        <Page pageNumber={pageNumber}   renderAnnotationLayer={false} />
      </Document>
      <p className="pdf-page text-center text-sm text-neutral-500 font-semibold  ">
        Page {pageNumber} of {numPages}
      </p>
       </div>
    </div>
  );
};
export default Reusme;