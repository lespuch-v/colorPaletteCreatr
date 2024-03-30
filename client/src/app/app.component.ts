import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColorService } from './color.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'colorPickr';
  userInput: string = 'shades of black';

  constructor(private color: ColorService) {
  }

  sendData(){
    this.color.postData(this.userInput).subscribe(response => {
      console.log(response)
    })
  }


}
