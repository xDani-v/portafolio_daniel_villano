import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactosComponent } from './components/contactos/contactos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactosComponent, ServiciosComponent, ProyectosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio_daniel_villano';
}
