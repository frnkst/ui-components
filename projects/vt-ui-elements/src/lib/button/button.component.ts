import {Component, Input} from '@angular/core';

@Component({
  selector: 'vt-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string = '';
}
