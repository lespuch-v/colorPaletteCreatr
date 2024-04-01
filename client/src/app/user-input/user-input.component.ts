import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule,
    JsonPipe
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  @Input() loadingData!: boolean;
  @Output() userInputData = new EventEmitter<string>()

  userInput: string = '';
  inputIsNotEmpty: boolean = true;

  handleUserColorPick() {
    if (this.userInput === null || this.userInput === '') {
      this.inputIsNotEmpty = true;
      return;
    } else {
      this.inputIsNotEmpty = false;
      this.userInputData.emit(this.userInput);
    }
  }

}
