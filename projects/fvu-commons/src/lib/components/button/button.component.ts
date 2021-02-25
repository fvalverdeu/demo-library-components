import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export type Size = 'xs' | 'small' | 'medium' | 'large' | 'xl';
const sizeClassList: Array<Size> = ['xs', 'small', 'medium', 'large', 'xl'];

@Component({
  selector: 'fvu-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class FvuButtonComponent implements OnInit {

  className: string;
  @Input() text: string;
  @Input() size: Size;
  @Output() sendClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
    this.text = 'Click me!!';
    this.size = 'medium';
    this.className = '';
  }

  ngOnInit() {
    this.className = this.updateModalSize();
  }

  ngOnChange() {
    this.className = this.updateModalSize();
  }

  private updateModalSize() {
    const isValid = sizeClassList.includes(this.size);
    return (isValid ? this.size : 'medium');
  }

  send(): void {
    this.sendClick.emit();
  }
}
