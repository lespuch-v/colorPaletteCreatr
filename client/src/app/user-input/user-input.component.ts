import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe, NgIf } from '@angular/common';
import { delay, of, tap } from 'rxjs';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule,
    JsonPipe,
    NgIf
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  @Input() loadingData!: boolean;
  @Output() userInputData = new EventEmitter<string>()

  userInput: string = '';
  inputIsNotEmpty: boolean = true;
  displayInfoMessage: boolean = false;

  handleUserColorPick() {
    if (this.userInput === null || this.userInput === '') {
      this.inputIsNotEmpty = true;
      this.displayInfoMessage = true;
      this.showInfoMessageToUser();
      return;
    } else {
      this.inputIsNotEmpty = false;
      this.userInputData.emit(this.userInput);
    }
  }

  showInfoMessageToUser(){
    of(null).pipe(
      delay(2000),
      tap(() => {
        this.displayInfoMessage = false;
      })
    ).subscribe();
  }
}
