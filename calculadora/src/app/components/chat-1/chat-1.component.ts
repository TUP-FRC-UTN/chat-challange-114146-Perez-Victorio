import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-chat-1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chat-1.component.html',
  styleUrl: './chat-1.component.css',
})
export class Chat1Component  {
  textMessage: string = '';

  @Output() msjSend = new EventEmitter<string>();

  saveMsj() {
    this.msjSend.emit(this.textMessage);
  }
 
}
