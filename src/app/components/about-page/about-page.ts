import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { About } from '../../about/about';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, About],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {}
