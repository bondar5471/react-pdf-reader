/* eslint-disable no-unused-vars */
import pdf1 from "../pdf_media/splitPDF/1-1.pdf";
import pdf2 from "../pdf_media/splitPDF/2-2.pdf";
import pdf3 from "../pdf_media/splitPDF/3-3.pdf";
import pdf4 from "../pdf_media/splitPDF/4-4.pdf";
import pdf5 from "../pdf_media/splitPDF/5-5.pdf";
import pdf6 from "../pdf_media/splitPDF/6-6.pdf";
import pdf7 from "../pdf_media/splitPDF/7-7.pdf";
import pdf8 from "../pdf_media/splitPDF/8-8.pdf";
import pdf9 from "../pdf_media/splitPDF/9-9.pdf";
import pdf10 from "../pdf_media/splitPDF/10-10.pdf";
import pdf11 from "../pdf_media/splitPDF/11-11.pdf";
import pdf12 from "../pdf_media/splitPDF/12-12.pdf";
import pdf13 from "../pdf_media/splitPDF/13-13.pdf";
import pdf14 from "../pdf_media/splitPDF/14-14.pdf";
import pdf15 from "../pdf_media/splitPDF/15-15.pdf";
import pdf16 from "../pdf_media/splitPDF/16-16.pdf";
import pdf17 from "../pdf_media/splitPDF/17-17.pdf";
import pdf18 from "../pdf_media/splitPDF/18-18.pdf";
import pdf19 from "../pdf_media/splitPDF/19-19.pdf";
import pdf21 from "../pdf_media/splitPDF/21-21.pdf";
import pdf22 from "../pdf_media/splitPDF/22-22.pdf";
import pdf23 from "../pdf_media/splitPDF/23-23.pdf";
import pdf24 from "../pdf_media/splitPDF/24-24.pdf";
import pdf25 from "../pdf_media/splitPDF/25-25.pdf";
import pdf26 from "../pdf_media/splitPDF/26-26.pdf";
import pdf27 from "../pdf_media/splitPDF/27-27.pdf";
import pdf28 from "../pdf_media/splitPDF/28-28.pdf";
import pdf29 from "../pdf_media/splitPDF/29-29.pdf";
import pdf30 from "../pdf_media/splitPDF/30-30.pdf";
import pdf31 from "../pdf_media/splitPDF/31-31.pdf";
import pdf32 from "../pdf_media/splitPDF/32-32.pdf";
import pdf33 from "../pdf_media/splitPDF/33-33.pdf";
import pdf34 from "../pdf_media/splitPDF/34-34.pdf";
import pdf35 from "../pdf_media/splitPDF/35-35.pdf";
import pdf36 from "../pdf_media/splitPDF/36-36.pdf";
import pdf37 from "../pdf_media/splitPDF/37-37.pdf";
import pdf38 from "../pdf_media/splitPDF/38-38.pdf";
import pdf39 from "../pdf_media/splitPDF/39-39.pdf";
import pdf40 from "../pdf_media/splitPDF/40-40.pdf";
import pdf41 from "../pdf_media/splitPDF/41-41.pdf";
import pdf42 from "../pdf_media/splitPDF/42-42.pdf";
import pdf43 from "../pdf_media/splitPDF/43-43.pdf";
import pdf44 from "../pdf_media/splitPDF/44-44.pdf";
import pdf45 from "../pdf_media/splitPDF/45-45.pdf";
import pdf46 from "../pdf_media/splitPDF/46-46.pdf";
import pdf47 from "../pdf_media/splitPDF/47-47.pdf";
import pdf48 from "../pdf_media/splitPDF/48-48.pdf";
import img from "../pdf_media/img.png";

let newsPDF = [
  {
    index: 1,
    altText: '1',
    src: pdf1,
    number: 1,
  },
  {
    index: 2,
    altText: '2',
    src: pdf2,
    number: 2,
  },
  {
    index: 3,
    altText: '3',
    src: pdf3,
    number: 3,
  },
  {
    index: 4,
    altText: '4',
    src: img,
  },
  {
    index: 5,
    altText: '5',
    src: pdf4,
    number: 4,
  },
  {
    index: 6,
    altText: '6',
    src: pdf5,
    number: 5,
  },
  {
    index: 7,
    altText: '7',
    src: pdf6,
    number: 6,
  },
  {
    index: 8,
    altText: '8',
    src: pdf7,
    number: 7,
  },
  {
    index: 9,
    altText: '9',
    src: img,
  },
  {
    index: 10,
    altText: '10',
    src: pdf8,
    number: 8,
  },
  {
    index: 11,
    altText: '11',
    src: pdf9,
    number: 9,
  },
  {
    index: 12,
    altText: '12',
    src: pdf10,
    number: 10,
  },
  {
    index: 13,
    altText: '13',
    src: pdf11,
    number: 11,
  },
  {
    index: 14,
    altText: '14',
    src: img,
  },
  {
    index: 15,
    altText: '15',
    src: pdf12,
    number: 12,
  },
  {
    index: 16,
    altText: '16',
    src: pdf13,
    number: 13,
  },
  {
    index: 17,
    altText: '17',
    src: pdf14,
    number: 14,
  },
];

let pages = [...Array(34)].map(x=>0).map((_x, index)=>{
  let newIndex = index + 18
  let src = require(`../pdf_media/splitPDF/${newIndex - 3}-${newIndex - 3 }.pdf`);
  return {
    index: newIndex,
    altText: newIndex.toString(),
    src: src,
    number: newIndex-3
  }
})
newsPDF = newsPDF.concat(pages)
const docPDF = [];

export { docPDF, newsPDF };
