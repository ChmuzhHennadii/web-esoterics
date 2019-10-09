import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sa-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {
  @Input() name: string = "";
  @Input() iconClass = "fa-user";
  @Input() toolTip: string = "";
  @Input() placeHolder: string = "";


  constructor() { }

  ngOnInit() {
  }

}
