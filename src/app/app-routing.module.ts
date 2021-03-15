import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReferencesComponent } from './references/references.component';


const routes: Routes = [
  { path: 'main', component: MainComponent, data: { animation: 'main' } },
  { path: 'about',    component: AboutComponent, data: { animation: 'about' }  },
  { path: 'projects',    component: ProjectsComponent },
  { path: 'references',    component: ReferencesComponent },
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '404', component: PagenotfoundComponent },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'top',
    enableTracing: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
