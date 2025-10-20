import { Component, HostListener, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isProfileShown = signal(false);
  isCartShown = signal(false);

  logout() {
    //TODO: implement logout functionality
  }

  toggleProfileMenu(event: Event) {
    event.stopPropagation();
    this.isProfileShown.update((value) => !value);
    this.isCartShown.set(false);
  }

  toggleCartMenu(event: Event) {
    event.stopPropagation();
    this.isCartShown.update((value) => !value);
    this.isProfileShown.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    this.isProfileShown.set(false);
    this.isCartShown.set(false);
  }
}
