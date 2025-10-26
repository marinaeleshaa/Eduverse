import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.css',
})
export class WhyChooseUsComponent {}
