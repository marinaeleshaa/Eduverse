import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-head-section',
  imports: [],
  templateUrl: './head-section.html',
  styleUrl: './head-section.css'
})
export class HeadSection {

  @Input() title!: string;
  @Input() subtitle!: string;

}
