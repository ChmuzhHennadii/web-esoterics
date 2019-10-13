import { Component, OnInit, forwardRef, Input, ElementRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, NG_VALIDATORS } from '@angular/forms';
import { ValidatorConfig, Validators } from '../../infrastructure/Validators';

@Component({
  selector: 'sa-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => TextBoxComponent), multi: true
    },
    {
      provide: NG_VALIDATORS, useExisting: forwardRef(() => TextBoxComponent), multi: true
    }
  ]
})
export class TextBoxComponent implements OnInit, ControlValueAccessor {
  @Input() name: string = "";
  @Input() iconClass = "fa-user";
  @Input() toolTip: string = "";
  @Input() placeHolder: string = "";
  @Input() type = "text"
  @Input() validationConfig: ValidatorConfig = Validators.Default;

  @Input() disabled = false;
  @Input() isValid = false;
  isTouched = false;

  private initialWriterCalls = 2;
  _value: string;
  get value(): string { return this._value; }
  set value(value: string) {
    if (this.initialWriterCalls-- <= 0) {
      this.isTouched = true;
      this.onTouched();
    }

    this._value = value;
    this.onChange(this._value);
  }

  @ViewChild('label') label: ElementRef;

  constructor() { }

  ngOnInit() {

  }

  validate = (c: FormControl) => {
    this.isValid = this.validationConfig.isValid(c.value);
    this.setUIState(this.isTouched && c.value != '' ? this.isValid : undefined);    

    if (this.isValid) {
      return null;
    }
    return { message: this.validationConfig.errorMessage };
  }

  private setUIState(isValid? : boolean){
    let label = this.label.nativeElement; 
    label.classList = [];
    label.classList.add('input');
    if (isValid !== undefined && this.validationConfig.working) {
      label.classList.add(isValid ? 'state-success' : 'state-error');
    }
  }

  writeValue(text: string): void {
    if (text === undefined)
      return;

    this.value = text;
    this.onChange(this.value)
  }
  registerOnChange = (fn: any) => this.onChange = fn;
  registerOnTouched = (fn: any) => this.onTouched = fn;
  setDisabledState?= (isDisabled: boolean) => this.disabled = isDisabled;
  onChange = (text: string) => { };
  onTouched = () => { };
}