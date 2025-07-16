import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-cta',
  imports: [NgClass],
  templateUrl: './cta.html',
  styleUrl: './cta.css'
})
export class Cta {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() buttonLabel: string = 'Learn More';
  @Input() buttonLink: string = '#';
  @Input() imageUrl: string = '';
  @Input() reverse: boolean = false;
}
