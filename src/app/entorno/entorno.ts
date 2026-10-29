import { Component } from '@angular/core';

@Component({
  selector: 'app-entorno',
  templateUrl: './entorno.html',
  styleUrl: './entorno.css'
})
export class Entorno {
  // Valores de esta rama. Cada rama (main, qa-pending, uat-pending) tiene los suyos.
  nombreEntorno = 'DEV';
  mensaje = 'Entorno sin configurar';
  color = '#6b7280'; // gris (sin entorno asignado)
}
