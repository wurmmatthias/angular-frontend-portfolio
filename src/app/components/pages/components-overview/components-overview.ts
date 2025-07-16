import { Component} from '@angular/core';
import { Hero } from '../../hero/hero';
import { Card } from '../../card/card';
import { Accordion } from '../../accordion/accordion';
import { CommonModule, NgForOf } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-components-overview',
  imports: [Hero, Card, Accordion, CommonModule, NgForOf, NgIf],
  templateUrl: './components-overview.html',
  styleUrl: './components-overview.css'
})
export class ComponentsOverview {
projects = [
  {
    name: 'Portfolio Website',
    description: 'A sleek personal portfolio built with Angular.',
    image: 'https://picsum.photos/seed/zoom/1280/720',
    url: 'https://myportfolio.com'
  },
  {
    name: 'SaaS CRM Tool',
    description: 'A simple, modular CRM for small teams.',
    image: 'https://picsum.photos/seed/katchi/1280/720',
    url: 'https://pandao.io'
  },
  {
    name: 'SaaS CRM Tool',
    description: 'A simple, modular CRM for small teams.',
    image: 'https://picsum.photos/seed/juppi/1280/720',
    url: 'https://pandao.io'
  },
  {
    name: 'SaaS CRM Tool',
    description: 'A simple, modular CRM for small teams.',
    image: 'https://picsum.photos/seed/uih/1280/720',
    url: 'https://pandao.io'
  },
    {
    name: 'Portfolio Website',
    description: 'A sleek personal portfolio built with Angular.',
    image: 'https://picsum.photos/seed/pfui/1280/720',
    url: 'https://myportfolio.com'
  },
  {
    name: 'SaaS CRM Tool',
    description: 'A simple, modular CRM for small teams.',
    image: 'https://picsum.photos/seed/hui/1280/720',
    url: 'https://pandao.io'
  },
  {
    name: 'SaaS CRM Tool',
    description: 'A simple, modular CRM for small teams.',
    image: 'https://picsum.photos/seed/sun/1280/720',
    url: 'https://pandao.io'
  },
  {
    name: 'SaaS CRM Tool',
    description: 'A simple, modular CRM for small teams.',
    image: 'https://picsum.photos/seed/sunset/1280/720',
    url: 'https://pandao.io'
  }
];

}
