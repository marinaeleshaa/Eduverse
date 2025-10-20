import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
// import 'swiper/css';

@Component({
  selector: 'app-youtube-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './youtube-slider.html',
  styleUrls: ['./youtube-slider.css'],
})
export class YoutubeSlider implements AfterViewInit {
  imgUrls: string[] = [
    'courses/angular.jpg',
    'courses/react.jpg',
    'courses/c-sharp.jpg',
    'courses/css.jpg',
    'courses/java.jpg',
    'courses/js.jpg',
    'courses/linux.jpg',
    'courses/python.jpg',
    'courses/sql.jpg',
    'courses/html.jpg',
  ];
  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      grabCursor: true,
      slidesPerView: 5.5,
      spaceBetween: 10,
      speed: 800,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 450,
        modifier: 1,
        slideShadows: true,
      },
    });
  }
}
