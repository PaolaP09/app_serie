import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {
  public appPages = [
    { title: 'Portada', url: '/portada', icon: 'image' },
    { title: 'Personajes', url: '/personajes', icon: 'people' },
    { title: 'Momentos', url: '/momentos', icon: 'film' },
    { title: 'Acerca de', url: '/acerca-de', icon: 'heart' },
    { title: 'En mi vida', url: '/en-mi-vida', icon: 'happy' },
    { title: 'Contratame', url: '/contratame', icon: 'woman' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
