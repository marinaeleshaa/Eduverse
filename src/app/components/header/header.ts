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

}
