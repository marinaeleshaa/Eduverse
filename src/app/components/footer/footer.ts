// footer.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styles: [],
})
export class Footer {
  currentUrl: string = '';
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.currentUrl = this.router.url;
    });
  }

get footerClasses() {
  return [
    'bg-violet-950',
    'text-white',
    'mt-auto',
    this.currentUrl !== '/home' ? '[clip-path:ellipse(65%_52%_at_51%_70%)] pt-30 bg-gradient-to-br from-violet-950 via-violet-900 to-violet-950' : '',
    this.currentUrl.includes("/dashboard") ? 'hidden' : ''
  ].join(' ');
}


}
