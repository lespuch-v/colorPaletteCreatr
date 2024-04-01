import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { KeyValuePipe, NgClass, NgForOf, NgIf } from '@angular/common';
import { delay, of, tap } from 'rxjs';

interface ColorResponse {
  [key: string]: string;
}

@Component({
  selector: 'app-generating-colors',
  standalone: true,
  imports: [
    KeyValuePipe,
    NgForOf,
    NgClass,
    NgIf
  ],
  templateUrl: './generating-colors.component.html',
  styleUrl: './generating-colors.component.css'
})
export class GeneratingColorsComponent {

  @Input() dataFromServer: ColorResponse = {};
  hoveredIndex: number | null = null;
  isCopied: boolean = false;
  copyIndex: number | null = null;

  constructor(private crd: ChangeDetectorRef) {
  }

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
    this.copyIndex = index;
    this.isCopied = true;

    of(null).pipe(
      delay(2000),
      tap(() => {
        this.isCopied = false;
        this.copyIndex = null;
        this.crd.detectChanges();
      })
    ).subscribe();

    navigator.clipboard.writeText(hexColor).then(() => {
      console.log('Value copied:', hexColor);
    }, (error) => {
      console.error('Failed to copy the value:', error);
    });
  }


}
