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
  cartMenuOpen: boolean;

  constructor() {
    this.profileMenuOpen = false;
    this.cartMenuOpen = false;
  }

  logout() {
    //TODO: implement logout functionality
  }

  toggleProfileMenu(event: Event) {
    event.stopPropagation();
    this.profileMenuOpen = !this.profileMenuOpen;
    this.cartMenuOpen = false;
  }

  toggleCartMenu(event: Event) {
    event.stopPropagation();
    this.cartMenuOpen = !this.cartMenuOpen;
    this.profileMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    this.profileMenuOpen = false;
    this.cartMenuOpen = false;
  }
}
