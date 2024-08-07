import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { GallaryComponent } from './gallary/gallary.component';

import { ReviewsComponent } from './reviews/reviews.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { hostname } from 'os';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path:'',component:HomeComponent,title:"home"},
    {path:'home',component:HomeComponent,title:"home"},
    {path:'about',component:AboutComponent,title:"about"},
    {path:'menu',component:MenuComponent,title:"menu"},
    {path:'gallery',component:GallaryComponent,title:"gallery"},
    {path:'reviews',component:ReviewsComponent,title:"reviews"},
    {path:'contacts',component:ContactComponent,title:"contacts"},
    {path:'team',component:TeamComponent,title:"team"},
   {path:"**",component:NotfoundComponent,title:"not found"}
];
