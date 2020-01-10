import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent implements OnInit {

  arrBadWord: string[] = ['html', 'java', 'sass'];

  constructor() { }

  ngOnInit() {
  }
  addButtonEvent():void{
    let badvalue = ((document.getElementById('inputidBad') as HTMLInputElement).value);
    if(badvalue.length>1){
        this.arrBadWord.push(badvalue);
        let blockBadWordsHead: HTMLElement = document.getElementById('IdblockBadWordsHead');
        blockBadWordsHead.innerHTML = '';
        blockBadWordsHead.innerHTML += this.arrBadWord;
        ((document.getElementById('inputidBad') as HTMLInputElement).value) = '';
    } else{
      (document.getElementById('inputidBad') as HTMLInputElement).style.borderColor = 'red';
      (document.getElementById('inputidBad') as HTMLInputElement).placeholder = 'Pleace, write a word!';
    }
  }
  focusEvent():void {
      (document.getElementById('inputidBad') as HTMLInputElement).style.borderColor = '';
  }
  resetButtonEvent():void{
    this.arrBadWord = [];
    let blockBadWordsHead: HTMLElement = document.getElementById('IdblockBadWordsHead');
    blockBadWordsHead.innerHTML = '';
    blockBadWordsHead.innerHTML += this.arrBadWord;
  }
  cenzorButtonEvent(): void{
    let str123:string = '';
    let textareaValue:string = ((document.getElementById('textarea') as HTMLTextAreaElement).value);
    if(textareaValue.length>1){
        str123 = textareaValue + ' ';
        this.arrBadWord.forEach(function (value) {
            str123 = str123.split(value+' ').join("*".repeat(value.length)+' ');
        }); 
        (document.getElementById('textarea') as HTMLTextAreaElement).value = str123;
    } else{
        (document.getElementById('textarea') as HTMLTextAreaElement).style.borderColor = 'red';
        (document.getElementById('textarea') as HTMLTextAreaElement).placeholder = 'Plese, write a text!';
    }
  }
  focusEventTextarea():void {
    (document.getElementById('textarea') as HTMLTextAreaElement).style.borderColor = '';
  }
}


