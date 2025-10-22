import { Component } from '@angular/core';
import { HomeHeroSection } from '../home-hero-section/home-hero-section';
@Component({
  selector: 'app-home-page',
  imports: [HomeHeroSection],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
