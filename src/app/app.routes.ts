import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'portada',
    loadComponent: () => import('./portada/portada.page').then( m => m.PortadaPage)
  },
  {
    path: 'personajes',
    loadComponent: () => import('./personajes/personajes.page').then( m => m.PersonajesPage)
  },
  {
    path: 'momentos',
    loadComponent: () => import('./momentos/momentos.page').then( m => m.MomentosPage)
  },
  {
    path: 'acerca-de',
    loadComponent: () => import('./acerca-de/acerca-de.page').then( m => m.AcercaDePage)
  },
  {
    path: 'en-mi-vida',
    loadComponent: () => import('./en-mi-vida/en-mi-vida.page').then( m => m.EnMiVidaPage)
  },
  {
    path: 'contratame',
    loadComponent: () => import('./contratame/contratame.page').then( m => m.ContratamePage)
  },
];
