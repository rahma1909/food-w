import { Component, HostListener } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { MenuComponent } from '../menu/menu.component';
import { GallaryComponent } from '../gallary/gallary.component';
import { ContactComponent } from '../contact/contact.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { TeamComponent } from '../team/team.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, MenuComponent, GallaryComponent, ContactComponent, ReviewsComponent, TeamComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const scrollPosition = window.scrollY;
    console.log('Scroll position:', scrollPosition);
}}
