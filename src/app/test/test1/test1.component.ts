import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {


  @ViewChild('content') content: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  /* public downloadPDF(){
      let doc = new jsPDF();
      let sepcialElementHandlers = {
        '#editor': function(element,renderer){
          return true;
        }

      };
      let content = this.content.nativeElement;

      doc.fromHTML(content.innerHTML,15,15, {
        width:190,
        'elementHandlers': sepcialElementHandlers
      });
      
      doc.save('test.pdf');
   } */
}
