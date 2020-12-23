import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { MovieFormComponent } from './pages/movie-form/movie-form.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';


export const routes: Routes = [
  {
      path: '',
      redirectTo: '/movies/2/edit',
      pathMatch: 'full',
  },
  {
    path: 'movies/:id/edit',
    component: MovieFormComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'movies',
    component: MovieListComponent
  },
];
