import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EventsComponent } from './pages/events/events.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    { path: '', component: HomeComponent ,pathMatch:'full'},
    { path: 'events', component: EventsComponent ,pathMatch:'full'},
    {path:'about', component:AboutComponent,pathMatch:'full'}
];
