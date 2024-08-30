import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SalaComponent } from "./components/sala/sala.component";
import { Chat1Component } from "./components/chat-1/chat-1.component";
import { Chat2Component } from "./components/chat-2/chat-2.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SalaComponent, Chat1Component, Chat2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadora';
}
