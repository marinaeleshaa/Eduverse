import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { FlyingContactBtn } from './components/utils/flying-contact-btn/flying-contact-btn';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, FlyingContactBtn],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Eduverse');
}
