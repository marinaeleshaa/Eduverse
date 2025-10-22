import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flying-contact-btn',
  imports: [],
  templateUrl: './flying-contact-btn.html',
  styleUrl: './flying-contact-btn.css',
})
export class FlyingContactBtn {
  currentUrl: string = '';
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.currentUrl = this.router.url;
    });
  }

  get isHidden() {
    return this.currentUrl.includes("/dashboard");
  }

  goToContact() {
    this.router.navigate(['/home'], { fragment: 'contactForm' });
    
}
}
