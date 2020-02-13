import React, { useState, useEffect } from "react";
import find from "lodash/find";
import { docPDF, newsPDF } from "../../helpers/items";
import { Grid } from "@material-ui/core";
import ToolBar from "../ToolBar";
import "./Styles.css";
import img from "../../pdf_media/img.png";

export default function PDFContainer({ match: { params } }) {
  const { slug } = params;
  const [currentPageIndex, setcurrentPageIndex] = useState(1);
  const [currentPDF, setCurrentPDF] = useState(newsPDF);
  useEffect(() => {
    switch (slug) {
      case "newsPDF":
        setcurrentPageIndex(1);
        setCurrentPDF(newsPDF);
        break;
      case "docPDF":
        setcurrentPageIndex(1);
        setCurrentPDF(docPDF);
        break;
      default:
        setcurrentPageIndex(1);
        setCurrentPDF(newsPDF);
    }
  }, [slug]);
  const pdfPage = find(currentPDF, page => {
    return page.index === currentPageIndex;
  });

  return (
    <Grid container>
      <Grid item xs={10}>
        <ToolBar
          setcurrentPageIndex={setcurrentPageIndex}
          items={currentPDF}
          currentPageIndex={currentPageIndex}
        />
      </Grid>
      <Grid item xs={10}>
        <div
          id="Iframe-Cicis-Menu-To-Go"
          class="set-margin-cicis-menu-to-go set-padding-cicis-menu-to-go set-border-cicis-menu-to-go set-box-shadow-cicis-menu-to-go center-block-horiz"
        >
          <div
            class="responsive-wrapper responsive-wrapper-padding-bottom-90pct"
            style={{ overflow: "auto" }}
          >
            <iframe title="reader" src={`${pdfPage.src}#toolbar=0`}></iframe>
          </div>
        </div>
      </Grid>
      <Grid item xs={2}>
        <img src={img} alt="Context ads" />
      </Grid>
    </Grid>
  );
}
