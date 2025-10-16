// import { Component, AfterViewInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import Swiper from 'swiper';
// import { EffectCoverflow, Pagination, Mousewheel } from 'swiper/modules';

// // تفعيل الموديولات
// Swiper.use([EffectCoverflow, Pagination, Mousewheel]);

// @Component({
//   selector: 'app-carousel3d',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './carousel3d.html',
//   styleUrls: ['./carousel3d.css'],
// })
// export class Carousel3dComponent implements AfterViewInit {
//   ngAfterViewInit(): void {
//     const swiper = new Swiper('.swiper', {
//       initialSlide: 3,
//       centeredSlides: true,
//       loop: true,
//       speed: 900,
//       grabCursor: true,
//       allowTouchMove: false,
//       effect: 'coverflow',
//       coverflowEffect: {
//         rotate: -10,
//         stretch: -45,
//         depth: 90,
//         modifier: 1,
//         slideShadows: true,
//       },
//       mousewheel: {
//         thresholdDelta: 50,
//         sensitivity: 1,
//       },
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
//       breakpoints: {
//         0: {
//           slidesPerView: 1,
//           spaceBetween: 20,
//         },
//         600: {
//           slidesPerView: 3,
//         },
//         1200: {
//           slidesPerView: 5,
//         },
//       },
//     });
//   }
// }

// import { Component, AfterViewInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import Swiper from 'swiper';
// import { EffectCoverflow, Pagination, Mousewheel } from 'swiper/modules';

// // تفعيل الموديولات
// Swiper.use([EffectCoverflow, Pagination, Mousewheel]);

// @Component({
//   selector: 'app-carousel3d',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './carousel3d.html',
//   styleUrls: ['./carousel3d.css'],
// })
// export class Carousel3dComponent implements AfterViewInit {
//   // ✅ مصفوفة الصور والداتا
//   slides = [
//     { img: 'courses/css.jpg', title: 'CSS Mastery', desc: 'Style beautiful web pages with modern CSS.' },
//     { img: 'courses/angular.jpg', title: 'Angular Pro', desc: 'Build scalable apps with Angular.' },
//     { img: 'courses/react.jpg', title: 'React Basics', desc: 'Learn React fundamentals easily.' },
//     { img: 'courses/sql.jpg', title: 'SQL Expert', desc: 'Master data with SQL queries.' },
//   ];

//   flippedIndex: number | null = null; // لتحديد الكارت المتقلب حاليًا

//   ngAfterViewInit(): void {
//     // ✅ تهيئة السلايدر
//     const swiper = new Swiper('.swiper', {
//       centeredSlides: true,
//       loop: true,
//       speed: 900,
//       grabCursor: true,
//       allowTouchMove: true,
//       effect: 'coverflow',
//       coverflowEffect: {
//         rotate: -10,
//         stretch: -45,
//         depth: 90,
//         modifier: 1,
//         slideShadows: true,
//       },
//       mousewheel: {
//         thresholdDelta: 50,
//         sensitivity: 1,
//       },
//       // pagination: {
//       //   el: '.swiper-pagination',
//       //   clickable: true,
//       // },
//       breakpoints: {
//         0: { slidesPerView: 1, spaceBetween: 20 },
//         600: { slidesPerView: 2 },
//         1000: { slidesPerView: 3 },
//       },
//     });
//   }

//   // ✅ دالة لقلب الكارت عند الضغط
//   flipCard(index: number): void {
//     if (this.flippedIndex === index) {
//       this.flippedIndex = null; // ارجعيه للوضع الطبيعي
//     } else {
//       this.flippedIndex = index; // خليه مقلوب
//     }
//   }
// }

import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { EffectCoverflow, Pagination, Mousewheel } from 'swiper/modules';

Swiper.use([EffectCoverflow, Pagination, Mousewheel]);

@Component({
  selector: 'app-carousel3d',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel3d.html',
  styleUrls: ['./carousel3d.css'],
})
export class Carousel3dComponent implements AfterViewInit {
  slides = [
    { img: 'courses/css.jpg', title: 'CSS Mastery', desc: 'Style beautiful web pages with modern CSS.' },
    { img: 'courses/angular.jpg', title: 'Angular Pro', desc: 'Build scalable apps with Angular.' },
    { img: 'courses/react.jpg', title: 'React Basics', desc: 'Learn React fundamentals easily.' },
    { img: 'courses/sql.jpg', title: 'SQL Expert', desc: 'Master data with SQL queries.' },
    { img: 'courses/js.jpg', title: 'JavaScript Pro', desc: 'Master JavaScript from basics to advanced.' },
  ];

  flippedIndex: number | null = null;

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper', {
      centeredSlides: true,
      loop: true,
      speed: 800,
      grabCursor: true,
      allowTouchMove: true,
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 0,
        stretch: 100,
        depth: -600,
        modifier: 1,
        slideShadows: false,
      },
      mousewheel: {
        thresholdDelta: 50,
        sensitivity: 1,
      },
      breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 10 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      },
    });
  }

  flipCard(index: number): void {
    if (this.flippedIndex === index) {
      this.flippedIndex = null;
    } else {
      this.flippedIndex = index;
    }
  }
}
