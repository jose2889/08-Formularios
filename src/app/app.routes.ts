import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { DataComponent } from './components/data/data.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'template', component: TemplateComponent },
    { path: 'data', component: DataComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);