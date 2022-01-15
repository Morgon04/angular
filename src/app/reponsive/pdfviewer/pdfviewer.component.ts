import { Component, OnInit } from '@angular/core';

import { PDFDocumentProxy } from 'ng2-pdf-viewer';


declare var require: any
const FileSaver = require('file-saver');


@Component({
  selector: 'app-pdfviewer',
  templateUrl: './pdfviewer.component.html',
  styleUrls: ['./pdfviewer.component.scss']
})
export class PdfviewerComponent implements OnInit {

  pdfSrc = "../../../assets/pdf/rc151-fill-21e.pdf";
  page = 1;
  totalPages: number

  constructor() { }

  ngOnInit(): void {
    // this.loadPdf();
  }

  downloadPdf() {
    FileSaver.saveAs(this.pdfSrc, 'testing.pdf')
  }

  // Load pdf


  afterLoadComplete(pdfData: PDFDocumentProxy) {
    console.log(pdfData)
    this.totalPages = pdfData.numPages;
    for (let i = 1; i <= this.totalPages; i++) {

      // track the current page
      let currentPage = null;
      pdfData.getPage(i).then(p => {
        currentPage = p;

        // get the annotations of the current page
        return p.getAnnotations();
      }).then(ann => {
        // ugly cast due to missing typescript definitions
        // please contribute to complete @types/pdfjs-dist
        const annotations = (<any>ann) as any[];

        let filtered = annotations
          .filter(a => a.subtype === 'Widget') // get the form field annotation only
        // .forEach(a => {
        //   console.log(a)
        //   // if (a.alternativeText === "Step 1, your information. First name.") {
        //   //  
        //   // }
        //   // if (a.alternativeText === "Step 1, your information. Last name.") {
        //   //   a.fieldValue = 'Sakthivel';
        //   // }
        //   // if (a.alternativeText === "Step 1, your information. Social insurance number. 9 digits.") {
        //   //   a.fieldValue = '999999999';
        //   // }
        // });
        if (i === 1) {
          filtered[1].fieldValue = 'Murugan';
          filtered[9].fieldValue = 'AB';
          filtered[11].fieldValue = 'English';

          const radioInterval = setInterval(() => {
            const checkBox = document.getElementById("911R");
            const checkBox1 = document.getElementById("909R");
            if (checkBox && checkBox1) {
              // checkBox.style.breakBefore ="red";
              clearInterval(radioInterval)
              checkBox.classList.add("selected");
              checkBox1.classList.add("selected");
            }
          }, 1000)


          console.log(filtered[11])
        }
      });
    }
  }

}
