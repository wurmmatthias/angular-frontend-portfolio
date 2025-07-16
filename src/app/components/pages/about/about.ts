import { Component } from '@angular/core';
import { Hero } from '../../hero/hero';
import { Button } from '../../button/button';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [Hero, Button, NgIf],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

}
