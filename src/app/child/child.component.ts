import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() boxColor:any;
  @Input() placeholderData:any;

  @Output() inputEvent=new EventEmitter();
  count:number=0;
  onCreate(inputData:any){
    if(inputData.value.length>0 && inputData.value!=" "){
    this.count=this.count+1;
    this.inputEvent.emit(inputData.value);
    }
    inputData.value='';
  }
  ngOnInit() {
  }

}