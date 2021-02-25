import { Component, Input, OnInit } from '@angular/core';

export type Size = 'xs' | 'small' | 'medium' | 'large' | 'xl';
const sizeClassList: Array<Size> = ['xs', 'small', 'medium', 'large', 'xl'];

export type Type = 'text' | 'password' | 'email' | 'number' | 'tel';
const typeList: Array<Type> = ['text', 'password', 'email', 'number', 'tel'];

@Component({
  selector: 'fvu-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class FvuInputComponent implements OnInit {

  className: string;
  inputType: string;
  @Input() type: Type;
  @Input() size: Size;
  @Input() placeholder: string;

  constructor() {
    this.inputType = 'text'
    this.type = 'text';
    this.size = 'medium';
    this.placeholder = 'Placeholder';
    this.className = 'medium';
  }

  ngOnInit() {
    this.inputType = this.updateType();
    this.className = this.updateSize();
  }

  ngOnChange() {
    this.inputType = this.updateType();
    this.className = this.updateSize();
  }

  private updateSize() {
    const isValid = sizeClassList.includes(this.size);
    return (isValid ? this.size : 'medium');
  }

  private updateType() {
    const isValid = typeList.includes(this.type);
    return (isValid ? this.type : 'text');
  }

}
