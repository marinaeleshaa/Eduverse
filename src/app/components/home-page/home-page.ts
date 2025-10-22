import { Component } from '@angular/core';
import { HomeHeroSection } from '../home-hero-section/home-hero-section';
import { ContactUs } from "../contact-us/contact-us";
import { Footer } from "../footer/footer";
import { Waves } from "../waves/waves";
@Component({
  selector: 'app-home-page',
  imports: [HomeHeroSection, ContactUs, Footer, Waves],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
