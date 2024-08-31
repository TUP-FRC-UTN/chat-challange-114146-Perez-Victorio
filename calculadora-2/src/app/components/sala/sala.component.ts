import { Component } from '@angular/core';
import { ChatComponent } from "../chat/chat.component";
import { Chat } from '../../Chat';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [ChatComponent],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {
  textBox: Chat[] = [];
  
  onSubmit(data: {name: string, message: string}) {
    this.textBox.push(data);
  }
  

}
