import { Component, Input } from '@angular/core';
import { KeyValuePipe, NgClass, NgForOf } from '@angular/common';

interface ColorResponse {
  [key: string]: string;
}

@Component({
  selector: 'app-generating-colors',
  standalone: true,
  imports: [
    KeyValuePipe,
    NgForOf,
    NgClass
  ],
  templateUrl: './generating-colors.component.html',
  styleUrl: './generating-colors.component.css'
})
export class GeneratingColorsComponent {

  @Input() dataFromServer: ColorResponse = {};
  hoveredIndex: number | null = null;

  getContrastYIQ(hexcolor: string): string {
    hexcolor = hexcolor.replace("#", "");
    const r = parseInt(hexcolor.substr(0, 2), 16);
    const g = parseInt(hexcolor.substr(2, 2), 16);
    const b = parseInt(hexcolor.substr(4, 2), 16);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? 'black' : 'white';
  }

  handleMouseEnter(index: number){
    this.hoveredIndex = index
  }

  HandleMouseLeave(){
    this.hoveredIndex = null
  }

  handleCopy(index: number, hexColor: string) {
    navigator.clipboard.writeText(hexColor).then(() => {
      console.log('value copied:', hexColor)
    }, (error) => {
      console.error('Failed co copy the value:', error)
    })
  }

}
