import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent {
  textMessage: string = '';
  textMessage2: string = '';

  @Output() msjSend = new EventEmitter<string>();

  saveMsj() {
    if (this.textMessage == '') {
      this.msjSend.emit(this.textMessage2);
      this.textMessage2 = '';
    } else if (this.textMessage2 == '') {
      this.msjSend.emit(this.textMessage);
      this.textMessage = '';
    } else{
      this.textMessage = ""
      this.textMessage2 = ""
    }
  }
}
