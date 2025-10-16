// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-image-slider',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './rolling-gallery.html',
//   styleUrls: ['./rolling-gallery.css'],
// })
// export class ImageSliderComponent {
//   images = [
//     { url: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400', alt: 'Coffee art' },
//     {
//       url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400',
//       alt: 'Creative scene',
//     },
//     {
//       url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400',
//       alt: 'Ocean cliff',
//     },
//     {
//       url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400',
//       alt: 'Coffee drink',
//     },
//     { url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400', alt: 'Latte art' },
//     { url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400', alt: 'Portrait' },
//     { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400', alt: 'Motorcycle' },
//   ];
// }

// // // image-slider.component.ts
// // import { Component } from '@angular/core';
// // import { CommonModule } from '@angular/common';

// // @Component({
// //   selector: 'app-image-slider',
// //   standalone: true,
// //   imports: [CommonModule],
// //   template: `
// //     <div class="relative overflow-hidden py-32 bg-gradient-to-br from-amber-50 to-violet-500">
// //       <div class="curved-wrapper">
// //         <div class="curved-track">
// //           <div class="flex gap-6 animate-scroll">
// //             <!-- First set of images -->
// //             <div
// //               *ngFor="let image of images"
// //               class="card-item flex-shrink-0 w-48 h-80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
// //             >
// //               <img [src]="image.url" [alt]="image.alt" class="w-full h-full object-cover" />
// //             </div>
// //             <!-- Duplicate set for seamless loop -->
// //             <div
// //               *ngFor="let image of images"
// //               class="card-item flex-shrink-0 w-48 h-80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
// //             >
// //               <img [src]="image.url" [alt]="image.alt" class="w-full h-full object-cover" />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   `,
// //   styles: [
// //     `
// //       .curved-wrapper {
// //         perspective: 1200px;
// //         perspective-origin: center center;
// //         width: 100%;
// //         height: 400px;
// //         display: flex;
// //         align-items: center;
// //         justify-content: center;
// //       }

// //       .curved-track {
// //         transform-style: preserve-3d;
// //         transform: rotateY(0deg);
// //         width: 200%;
// //       }

// //       .animate-scroll {
// //         display: flex;
// //         transform-style: preserve-3d;
// //         animation: scroll3d 40s linear infinite;
// //         transform-origin: center center;
// //       }

// //       .card-item {
// //         transform-style: preserve-3d;
// //         backface-visibility: visible;
// //       }

// //       /* Create 3D curve effect on each card based on position */
// //       .animate-scroll > .card-item:nth-child(14n + 1) {
// //         transform: translateZ(-100px) rotateY(-20deg);
// //       }
// //       .animate-scroll > .card-item:nth-child(14n + 2) {
// //         transform: translateZ(-50px) rotateY(-15deg);
// //       }
// //       .animate-scroll > .card-item:nth-child(14n + 3) {
// //         transform: translateZ(0px) rotateY(-10deg);
// //       }
// //       .animate-scroll > .card-item:nth-child(14n + 4) {
// //         transform: translateZ(50px) rotateY(-5deg);
// //       }
// //       .animate-scroll > .card-item:nth-child(14n + 5) {
// //         transform: translateZ(80px) rotateY(0deg);
// //       }
// //       .animate-scroll > .card-item:nth-child(14n + 6) {
// //         transform: translateZ(100px) rotateY(5deg);
// //       }
// //       .animate-scroll > .card-item:nth-child(14n + 7) {
// //         transform: translateZ(80px) rotateY(10deg);
// //       }
// //       .animate-scroll > .card-item:nth-child(14n + 8) {
// //         transform: translateZ(50px) rotateY(15deg);
// //       }
// //       .animate-scroll > .card-item:nth-child(14n + 9) {
// //         transform: translateZ(0px) rotateY(20deg);
// //       }
// //       .animate-scroll > .card-item:nth-child(14n + 10) {
// //         transform: translateZ(-50px) rotateY(15deg);
// //       }
// //       .animate-scroll > .card-item:nth-child(14n + 11) {
// //         transform: translateZ(-100px) rotateY(10deg);
// //       }
// //       .animate-scroll > .card-item:nth-child(14n + 12) {
// //         transform: translateZ(-50px) rotateY(5deg);
// //       }
// //       .animate-scroll > .card-item:nth-child(14n + 13) {
// //         transform: translateZ(0px) rotateY(0deg);
// //       }
// //       .animate-scroll > .card-item:nth-child(14n) {
// //         transform: translateZ(-50px) rotateY(-5deg);
// //       }

// //       @keyframes scroll3d {
// //         0% {
// //           transform: translateX(0);
// //         }
// //         100% {
// //           transform: translateX(-50%);
// //         }
// //       }

// //       .animate-scroll:hover {
// //         animation-play-state: paused;
// //       }

// //       .card-item:hover {
// //         transform: translateZ(150px) rotateY(0deg) scale(1.05) !important;
// //         z-index: 50;
// //       }
// //     `,
// //   ],
// // })
// // export class ImageSliderComponent {
// //   images = [
// //     { url: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400', alt: 'Coffee art' },
// //     {
// //       url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400',
// //       alt: 'Creative scene',
// //     },
// //     {
// //       url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400',
// //       alt: 'Ocean cliff',
// //     },
// //     {
// //       url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400',
// //       alt: 'Coffee drink',
// //     },
// //     { url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400', alt: 'Latte art' },
// //     { url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400', alt: 'Portrait' },
// //     { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400', alt: 'Motorcycle' },
// //   ];
// // }

