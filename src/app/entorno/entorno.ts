import { Component } from '@angular/core';

@Component({
  selector: 'app-entorno',
  templateUrl: './entorno.html',
  styleUrl: './entorno.css'
})
export class Entorno {
  // Valores de esta rama. Cada rama (main, qa-pending, uat-pending) tiene los suyos.
  nombreEntorno = 'QA';
  mensaje = 'Entorno de pruebas QA';
  color = '#ef6c00'; // naranja
}
