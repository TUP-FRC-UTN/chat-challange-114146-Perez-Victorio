import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() msjSend = new EventEmitter<{name: string, message: string}>();

  saveMsj() {
    if (this.textMessage == '' && this.textMessage2 != '') {
      this.msjSend.emit({name: 'Pepe', message: this.textMessage2});
      this.textMessage2 = '';
    } else if (this.textMessage2 == '' && this.textMessage != '') {
      this.msjSend.emit({name: 'María', message: this.textMessage});
      this.textMessage = '';
    } else if (this.textMessage2 == '' && this.textMessage == '') {
      alert('Ingrese un mensaje para enviar al chat!');
    }
  }
}

