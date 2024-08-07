import { Component ,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GallaryComponent } from './gallary/gallary.component';
import{ReviewsComponent} from './reviews/reviews.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { TeamComponent } from "./team/team.component";
import { FooterComponent } from "./footer/footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutComponent, HomeComponent, MenuComponent, NavbarComponent, GallaryComponent, ContactComponent, ReviewsComponent, TeamComponent, FooterComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'task1';
  isLoading = true;

  ngOnInit(): void {
    // Simulate a delay to demonstrate the loading screen
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); // 3 seconds delay
  }
};
