import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMenuOpen = false;

  constructor(private router: Router) {}
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  async goHome(event: MouseEvent) {
    event.preventDefault();

    const currentUrl = this.router.url.split('#')[0];

    if (currentUrl === '/home') {
      //  remove fragment from URL if found
      if (window.location.hash) {
        history.replaceState(null, '', '/home');
      }

      // scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      //if not on home, navigate to home
      await this.router.navigate(['/home']);
      // then scroll to top after a short delay to ensure the page has loaded
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 200);
    }
  }
}
