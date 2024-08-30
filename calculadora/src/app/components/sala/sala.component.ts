import { Component } from '@angular/core';
import { Chat1Component } from "../chat-1/chat-1.component";
import { Chat2Component } from "../chat-2/chat-2.component";

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [Chat1Component, Chat2Component],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {

  textBox:string [] = [];

  lastNombre:string [] = []

  onSaveMsj(msj:string){
    this.textBox.push(msj)
  }


}
