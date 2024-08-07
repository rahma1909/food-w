import { Component, HostListener, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
imgsrc1:string="./assets/logo.png"
private readonly defaultHeight = '60px';
  private readonly expandedHeight = '100px';

  constructor(private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) { 
      this.renderer.setStyle(document.querySelector('nav'), 'height', this.expandedHeight);
    } else {
      this.renderer.setStyle(document.querySelector('nav'), 'height', this.defaultHeight);
    }
  }
}


