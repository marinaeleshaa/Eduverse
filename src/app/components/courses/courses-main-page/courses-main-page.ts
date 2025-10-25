import { Component } from '@angular/core';
import { HeadSection } from "../../head-section/head-section";
import { RouterModule, RouterOutlet } from "@angular/router";
@Component({
  selector: 'app-courses-main-page',
  imports: [HeadSection, RouterModule, RouterOutlet],
  templateUrl: './courses-main-page.html',
  styleUrl: './courses-main-page.css'
})
export class CoursesMainPage {

}
