import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Importante para rotas

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // Apenas o Router
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Não precisa de lógica aqui, ela está no SistemaComponent agora
}