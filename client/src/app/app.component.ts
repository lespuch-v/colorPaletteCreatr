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
  userInput: { user_input: string } = {
    "user_input": "car"
  }
  mockData = {
    "Midnight Black": "#000000",
    "Metallic Silver": "#A0A0A0",
    "Racing Red": "#FF0000",
    "Carbon Fiber Gray": "#333333",
    "Classic White": "#FFFFFF"
  }

  constructor(private color: ColorService) {}

  // TODO: Use me later once you have your front-end ready
  // sendData(){
  //   this.color.postData(this.userInput).subscribe(response => {
  //     console.log(response)
  //   })
  // }
  test() {
    console.log('test method was triggered!')
  }
}
