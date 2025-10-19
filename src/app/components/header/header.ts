import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  profileMenuOpen: boolean;

  constructor() {
    this.profileMenuOpen = false;
  }

  toggleProfileMenu(event: Event) {
    event.stopPropagation();
    this.profileMenuOpen = !this.profileMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  closeProfileMenu(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const clickedInside = target.dataset['profileMenu'] === 'true';
    if (!clickedInside) {
      this.profileMenuOpen = false;
    }
  }
}
