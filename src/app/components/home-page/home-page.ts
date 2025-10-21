import { Component } from '@angular/core';
import { HomeHeroSection } from '../home-hero-section/home-hero-section';
import { ContactUs } from "../contact-us/contact-us";
@Component({
  selector: 'app-home-page',
  imports: [HomeHeroSection, ContactUs],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
