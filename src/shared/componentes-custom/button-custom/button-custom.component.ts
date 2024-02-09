import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-custom',
  templateUrl: './button-custom.component.html',
  styleUrl: './button-custom.component.scss'
})
export class ButtonCustomComponent {

  @Input() type!: string;
  @Input() label!: string;
  @Input() color!: string;
  @Input() icon!: string;
}
