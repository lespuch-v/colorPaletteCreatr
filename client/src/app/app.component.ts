import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColorService } from './color.service';
import { UserInputComponent } from './user-input/user-input.component';
import { JsonPipe, KeyValuePipe, NgForOf, NgIf } from '@angular/common';
import { GeneratingColorsComponent } from './generating-colors/generating-colors.component';
import { LoadingComponent } from './loading/loading.component';

interface ColorResponse {
  [key: string]: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserInputComponent, NgForOf, KeyValuePipe, JsonPipe, GeneratingColorsComponent, LoadingComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'colorPickr';
  isLoading: boolean = false;
  userInputServer: { user_input: string } = {
    'user_input': ''
  }

  dataFromServer: ColorResponse = {};

  constructor(private color: ColorService) {
  }

  processUserInput(data: string) {
    this.isLoading = true;
    this.userInputServer.user_input = data;
    this.color.postData(this.userInputServer).subscribe((response: any) => {
      this.dataFromServer = JSON.parse(response)
      this.isLoading = false;
    });
  }
}
