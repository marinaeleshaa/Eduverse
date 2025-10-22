import { Component, AfterViewInit } from '@angular/core';
import { HomeHeroSection } from '../home-hero-section/home-hero-section';
import { ContactUs } from '../contact-us/contact-us';
import { Waves } from '../waves/waves';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  imports: [HomeHeroSection, ContactUs, Waves],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements AfterViewInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngAfterViewInit() {
    // ✅ ننتظر التنقّل بالكامل (حتى لو الصفحة اتحمّلت من صفحة تانية)
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.route.snapshot.fragment;
        if (fragment) {
          setTimeout(() => {
            const element = document.getElementById(fragment);
            if (element) {
              const yOffset = -80; // 👈 مسافة لتعويض الـ navbar الثابت (عدّليها لو محتاجة)
              const y =
                element.getBoundingClientRect().top + window.scrollY + yOffset;

              window.scrollTo({
                top: y,
                behavior: 'smooth', // ✅ scroll ناعم فعليًا
              });
            }
          }, 400); // delay بسيط عشان العناصر تكون ظهرت فعلًا
        }
      });
  }
}
