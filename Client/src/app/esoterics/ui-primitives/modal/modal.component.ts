import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'sa-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent implements OnInit {
  @Input() modalTitle: string;
  @Input() confirmName: string = "Save"

  @Output() cancelling = new EventEmitter();
  @Output() saving = new EventEmitter();
  @Output() hiding = new EventEmitter();

  @ViewChild('lgModal') public lgModal: ModalDirective;
  @ViewChild('confirmBtn') confirmBtn: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  public show() {
    this.lgModal.show();
    this.confirmActivity = true;
  }

  public hide() {
    this.lgModal.hide();
  }

  public set confirmActivity(value: boolean) {
    this.confirmBtn.nativeElement.disabled = !value;
  }
}