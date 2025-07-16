import { Component } from '@angular/core';
import { Hero } from '../../hero/hero';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [Hero, NgIf],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
