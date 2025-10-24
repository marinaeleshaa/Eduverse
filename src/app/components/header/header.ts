<<<<<<< HEAD
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule],
=======
import { Component, HostListener, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, FormsModule],
>>>>>>> amr
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
<<<<<<< HEAD
  isMenuOpen = false;

  constructor(private router: Router) {}
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  async goHome(event: MouseEvent) {
    event.preventDefault(); // منع التنقل التلقائي

    const currentUrl = this.router.url.split('#')[0];

    // ✅ الحالة 1: لو أنا بالفعل في /home
    if (currentUrl === '/home') {
      // نمسح الفراجمنت لو موجود في الـ URL
      if (window.location.hash) {
        history.replaceState(null, '', '/home');
      }

      // نعمل scroll لأعلى الصفحة
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // ✅ الحالة 2: لو أنا مش في /home
      // نعمل navigation جديد
      await this.router.navigate(['/home']);
      // بعد ما يوصل للهوم نطلع فوق
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 200);
    }
  }

  //   goHome() {
  //   if (this.router.url.startsWith('/home')) {
  //     // ✅ امسحي أي fragment من الـ URL
  //     this.router.navigate([], {
  //       fragment: undefined, // ← هنا التعديل الصحيح
  //       queryParamsHandling: 'preserve',
  //     });

  //     // ✅ scroll لأعلى الصفحة بسلاسة
  //     window.scrollTo({ top: 0, behavior: 'smooth' });
  //   } else {
  //     // ✅ المستخدم في صفحة تانية → روح للـ home
  //     this.router.navigate(['/home']);
  //   }
  // }
=======
  isProfileShown = signal(false);
  isCartShown = signal(false);

  logout() {
    //TODO: implement logout functionality
  }

  toggleProfileMenu(event: Event) {
    event.stopPropagation();
    this.isProfileShown.update((value) => !value);
    this.isCartShown.set(false);
  }

  toggleCartMenu(event: Event) {
    event.stopPropagation();
    this.isCartShown.update((value) => !value);
    this.isProfileShown.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    this.isProfileShown.set(false);
    this.isCartShown.set(false);
  }
>>>>>>> amr
}
