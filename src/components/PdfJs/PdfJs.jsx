import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import pdfjs from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  img: {
    maxWidth: '100%',
    height: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
  },
  canvas: {
    width: '1276px',
    height: '1749px',
    display: 'block',
  },
  wrap: {
    position: 'relative',
  },
  overlay: {
    'background-color': 'red',
    position: 'absolute',
  },
}));
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
const PdfJs = ({ src, coords }) => {
  const classes = useStyles();
  const canvasRef = useRef(null);
  const isPdf = src.endsWith('pdf');
  useEffect(() => {
    if (isPdf) {
      fetchPdf(src, canvasRef);
    }
  }, [isPdf, src]);
  const mystyle = {};

  if (coords.length > 0) {
    let x1; let y1; let x2; let
      y2;
    [x1, y1, x2, y2] = coords.split(' ');
    mystyle.top = `${y1}px`;
    mystyle.left = `${x1}px`;
    mystyle.width = Math.abs(+x2 - +x1);
    mystyle.height = Math.abs(+y2 - +y1);
    mystyle['background-color'] = 'rgba(245, 0, 87, 0.5)';
  }
  return (
    <>
      {isPdf ? (
        <div className={classes.wrap}>
          <canvas
            className={classes.canvas}
            ref={canvasRef}
            width={window.innerWidth}
            height={window.innerHeight}
          />
          <div className={classes.overlay} style={mystyle}>  </div>
        </div>
      ) : (
        <img alt="ads" src={src} className={classes.img} />
      )}
    </>
  );
};

const fetchPdf = async (src, canvasRef) => {
  const loadingTask = pdfjs.getDocument(src);

  const pdf = await loadingTask.promise;

  const firstPageNumber = 1;

  const page = await pdf.getPage(firstPageNumber);

  const canvas = canvasRef.current;

  const viewport = page.getViewport(canvas.width / page.getViewport(1.0).width);

  const context = canvas.getContext('2d');

  canvas.height = '1749';
  canvas.width = '1276';
  const renderContext = {
    canvasContext: context,
    viewport,
  };
  const renderTask = page.render(renderContext);

  await renderTask.promise;
};

PdfJs.propTypes = {
  src: PropTypes.string.isRequired,
  coords: PropTypes.array.isRequired
};

export default PdfJs;
