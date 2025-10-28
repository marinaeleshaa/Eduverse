import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICourse } from '../Interfaces/icourse';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<ICourse[]>([]);
  cartItems$ = this.cartItems.asObservable();

  addToCart(course: ICourse) {
    const current = this.cartItems.value;
    this.cartItems.next([course, ...current]);
    localStorage.setItem('cart', JSON.stringify([course, ...current]));
  }

  getCartItems() {
    const cart = localStorage.getItem('cart');
    if (cart) {
      this.cartItems.next(JSON.parse(cart));
    } else {
      this.cartItems.next([]);
    }
  }

  removeFromCart(course: ICourse) {
    const current = this.cartItems.value;
    const updated = current.filter((c) => c._id !== course._id);
    this.cartItems.next(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  }

  clearCart() {
    this.cartItems.next([]);
    localStorage.removeItem('cart');
  }
}
