import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import pdfjs from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  img: {
    maxWidth: "100%",
    height: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block"
  },
  canvas: {
    maxWidth: "100%",
    height: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block"
  }
}));
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
const PdfJs = ({ src }) => {
  const classes = useStyles();
  const canvasRef = useRef(null);
  let isPdf = src.endsWith("pdf");
  useEffect(() => {
    if (isPdf) {
      fetchPdf(src, canvasRef);
    }
  }, [src]);

  return (
    <>
      {isPdf ? (
        <canvas
          className={classes.canvas}
          ref={canvasRef}
          width={window.innerWidth}
          height={window.innerHeight}
        />
      ) : (
        <img src={src} className={classes.img} />
      )}
    </>
  );
};

const fetchPdf = async (src, canvasRef) => {
  const loadingTask = pdfjs.getDocument(src);

  const pdf = await loadingTask.promise;

  const firstPageNumber = 1;

  const page = await pdf.getPage(firstPageNumber);

  const scale = 1.5;
  const viewport = page.getViewport({ scale: scale });

  const canvas = canvasRef.current;

  const context = canvas.getContext("2d");
  context.fillRect(10,10,300,300)
  context.fillStyle = "#ff0";
  context.globalCompositeOperation = "multiply";
  debugger;
  canvas.height = viewport.height;
  canvas.width = viewport.width;

  const renderContext = {
    canvasContext: context,
    viewport: viewport
  };
  const renderTask = page.render(renderContext);

  await renderTask.promise;
};

PdfJs.propTypes = {
  src: PropTypes.string
};

export default PdfJs;
