import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {
  loadingIconPath: string = './assets/loadingIcon.png';

}
