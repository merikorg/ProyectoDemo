import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
   /* children: [
      { path: 'favoritos', component: FavoritesComponent },
      { path: 'estadisticas', component: StatisticsComponent },
      { path: 'mis-proyectos', component: MyProjectsComponent },
      { path: 'actualizar-datos', component: UpdateDataComponent },
      { path: '', redirectTo: 'favoritos' },
    ],*/
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ComponentsRoutingModule {}