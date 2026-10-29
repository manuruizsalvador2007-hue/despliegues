import { Component } from '@angular/core';

@Component({
  selector: 'app-entorno',
  templateUrl: './entorno.html',
  styleUrl: './entorno.css'
})
export class Entorno {
  // Valores de esta rama. Cada rama (main, qa-pending, uat-pending) tiene los suyos.
  nombreEntorno = 'UAT';
  mensaje = 'Entorno de aceptación UAT';
  color = '#1565c0'; // azul
}
