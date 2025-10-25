import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-waves',
  imports: [NgClass],
  templateUrl: './waves.html',
  styleUrl: './waves.css'
})
export class Waves {

  @Input() class: string = '';

}
