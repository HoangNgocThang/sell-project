import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HeroDetailComponent} from './Components/hero-detail/hero-detail.component';
import {HeroesComponent} from './Components/heroes/heroes.component';
import {HomeComponent} from './Pages/home/home.component';
import {CateComponent} from './Pages/cate/cate.component';
import {DetailComponent} from './Pages/detail/detail.component';

const routes: Routes = [
  {path: 'hero/:heroId', component: HeroDetailComponent},
  {path: 'hero', component: HeroesComponent},
  {path: 'cate', component: CateComponent},
  {path: 'detail', component: DetailComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
