import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat-2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chat-2.component.html',
  styleUrl: './chat-2.component.css',
})
export class Chat2Component  {
  textMessage: string = '';

  @Output() msjSend = new EventEmitter<string>();

  saveMsj() {
    this.msjSend.emit(this.textMessage);
  }
}
