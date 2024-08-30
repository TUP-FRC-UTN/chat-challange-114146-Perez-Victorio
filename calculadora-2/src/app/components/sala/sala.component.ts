import { Component } from '@angular/core';
import { ChatComponent } from "../chat/chat.component";

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [ChatComponent],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {
  textBox:string [] = []


  onSubmit(msj:string){
    this.textBox.push(msj)
  }

}
