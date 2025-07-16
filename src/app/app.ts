import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { Home } from './components/pages/home/home';
import { About } from './components/pages/about/about';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Hero, Home, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-frontend-portfolio';
}
