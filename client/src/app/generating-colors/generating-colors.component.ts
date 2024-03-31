import { Component, Input } from '@angular/core';
import { KeyValuePipe, NgForOf } from '@angular/common';

interface ColorResponse {
  [key: string]: string;
}

@Component({
  selector: 'app-generating-colors',
  standalone: true,
  imports: [
    KeyValuePipe,
    NgForOf
  ],
  templateUrl: './generating-colors.component.html',
  styleUrl: './generating-colors.component.css'
})
export class GeneratingColorsComponent {

  @Input() dataFromServer: ColorResponse = {};
}
