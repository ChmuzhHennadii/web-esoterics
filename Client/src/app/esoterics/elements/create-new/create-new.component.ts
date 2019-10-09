import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sa-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent implements OnInit {
  @Input() text: string = "";
  @Output() click = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
