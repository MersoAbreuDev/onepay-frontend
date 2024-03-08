import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrl: './custom-card.component.scss'
})
export class CustomCardComponent {
  @Input() header!: string;
  @Input() width!: string;
  @Input() height!: string;
  @Input() margin!: string;
}
