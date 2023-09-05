import {Component, Input, OnChanges} from '@angular/core';
import {NgClass} from "@angular/common";

type Color = 'primary' | 'secondary' | 'glow-on-hover';

@Component({
  selector: 'vt-button',
  standalone: true,
  templateUrl: './button.component.html',
  imports: [
    NgClass
  ],
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnChanges {
  @Input() label: string = '';
  @Input() type: Color = 'primary'
  className = 'primary';

  ngOnChanges(): void {
    this.className = this.type.toString();
  }
}
