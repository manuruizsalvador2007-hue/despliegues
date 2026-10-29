import { Component } from '@angular/core';
import { Entorno } from './entorno/entorno';

@Component({
  selector: 'app-root',
  imports: [Entorno],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
