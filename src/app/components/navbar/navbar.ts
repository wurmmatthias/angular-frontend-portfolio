import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { Loginmodal } from '../loginmodal/loginmodal';
import { Button } from '../button/button';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, Loginmodal, Button, NgIf],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  isMobileMenuOpen = false;
  showLogin = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleLoginModal() {
    this.showLogin = !this.showLogin;
  }
}
