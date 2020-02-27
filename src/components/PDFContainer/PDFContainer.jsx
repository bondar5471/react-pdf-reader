import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import find from 'lodash/find';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { docPDF, newsPDF } from '../../helpers/items';
import ToolBar from '../ToolBar';
import './Styles.css';
import img from '../../pdf_media/img.png';
import PdfJs from '../PdfJs';
import SearchContainer from '../SearchContainer';

const useStyles = makeStyles(() => ({
  img: {
    maxWidth: '100%',
    height: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
  },
}));

export default function PDFContainer({ slug }) {
  const [coordinates, setCoordinates] = useState([]);
  const classes = useStyles();
  const [currentPageIndex, setcurrentPageIndex] = useState(1);
  const [currentPDF, setCurrentPDF] = useState(newsPDF);
  useEffect(() => {
    switch (slug) {
      case 'newsPDF':
        setcurrentPageIndex(1);
        setCurrentPDF(newsPDF);
        break;
      case 'docPDF':
        setcurrentPageIndex(1);
        setCurrentPDF(docPDF);
        break;
      default:
        setcurrentPageIndex(1);
        setCurrentPDF(newsPDF);
    }
  }, [slug]);
  const pdfPage = find(currentPDF, (page) => page.index === currentPageIndex);
  return (
    <Grid container>
      <Grid item lg={12} xs={12}>
        <SearchContainer setCurrentPage={setcurrentPageIndex} setCoordinates={setCoordinates} />
      </Grid>
      <Grid item lg={12} xs={12}>
        <ToolBar
          setcurrentPageIndex={setcurrentPageIndex}
          items={currentPDF}
          currentPageIndex={currentPageIndex}
        />
      </Grid>
      <PdfJs src={pdfPage.src} coords={coordinates} />
      <Grid item lg={12} xs={12} justify="center">
        <img src={img} alt="Context ads" className={classes.img} />
      </Grid>
    </Grid>
  );
}

PDFContainer.propTypes = {
  slug: PropTypes.string.isRequired
};