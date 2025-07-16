import { Component } from '@angular/core';
import { Hero } from '../../hero/hero';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [Hero, NgIf],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

}
