import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flying-contact-btn',
  templateUrl: './flying-contact-btn.html',
  styleUrl: './flying-contact-btn.css',
})
export class FlyingContactBtn {
  currentUrl: string = '';

  constructor(private router: Router, private location: Location) {
    this.router.events.subscribe(() => {
      this.currentUrl = this.router.url;
    });
  }

  get isHidden() {
    return this.currentUrl.includes('/dashboard');
  }

  goToContact() {
    // ✅ لو أنا بالفعل في /home
    if (this.currentUrl.startsWith('/home')) {
      this.router.navigate([], { fragment: 'contactForm' });
    } else {
      // ✅ لو في أي صفحة تانية، نروح للهوم ومعانا الـ fragment
      this.router.navigate(['/home'], { fragment: 'contactForm' });
    }
  }
}
