import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-my-slider',
  standalone: true,
  templateUrl: './my-slider.html',
  styleUrls: ['./my-slider.css'],
})
export class MySlider implements AfterViewInit {
  @ViewChild('slider') slider!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    const section = this.slider.nativeElement;

    // const handleScroll = () => {
    const rect = section.getBoundingClientRect();
    const center = rect.width / 2;

    const images = section.querySelectorAll('img');
    images.forEach((img) => {
      const imgRect = img.getBoundingClientRect();
      const imgCenter = imgRect.left - imgRect.width / 2;
      const distanceFromCenter = imgCenter - center;

      // Normalize distance (-1 to 1)
      const normalized = distanceFromCenter / center;

      // 👇 هنا العكس: كل ما تقرب من النصّ تصغر، وكل ما تروح للجنب تكبر
      const scale = 1 + Math.abs(normalized) * 0.2; // الجوانب أكبر
      const translateZ = (1 - Math.abs(normalized)) * 100; // النصّ بعيد (أصغر في العمق)

      (img as HTMLElement).style.transform = `
          perspective(1000px)
          translateZ(${translateZ * -1}px)
          scale(${scale})
        `;
      (img as HTMLElement).style.transition = 'transform 0.3s ease-out';
    });
    // };

    // section.addEventListener('scroll', handleScroll);
    // handleScroll();
  }
}

// @Component({
//   selector: 'app-my-slider',
//   standalone: true,
//   templateUrl: './my-slider.html',
//   styleUrls: ['./my-slider.css']
// })
// export class MySlider implements AfterViewInit {
//   @ViewChild('slider') slider!: ElementRef<HTMLDivElement>;

//   ngAfterViewInit() {
//     const section = this.slider.nativeElement;

//     const handleScroll = () => {
//       const rect = section.getBoundingClientRect();
//       const center = rect.width / 2;

//       const images = section.querySelectorAll('img');
//       images.forEach((img) => {
//         const imgRect = img.getBoundingClientRect();
//         const imgCenter = imgRect.left + imgRect.width / 2;
//         const distanceFromCenter = imgCenter - center;

//         // Normalize distance (-1 to 1)
//         const normalized = distanceFromCenter / center;

//         // Scale & rotate depending on position
//         const rotateY = normalized * 40; // tilt side images
//         const scale = 1 - Math.abs(normalized) * 0.3; // smaller on sides
//         const translateZ = -Math.abs(normalized) * 200; // push sides backward

//         (img as HTMLElement).style.transform = `
//           perspective(1000px)
//           rotateY(${rotateY}deg)
//           translateZ(${translateZ}px)
//           scale(${scale})
//         `;
//         (img as HTMLElement).style.transition = 'transform 0.2s ease-out';
//       });
//     };

//     section.addEventListener('scroll', handleScroll);
//     handleScroll();
//   }
// }
