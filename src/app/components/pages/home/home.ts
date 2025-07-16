import { Component } from '@angular/core';
import { Hero } from '../../hero/hero';
import { Cta } from '../../cta/cta';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [Hero, Cta, NgIf],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
