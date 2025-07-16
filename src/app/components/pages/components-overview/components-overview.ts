import { Component} from '@angular/core';
import { Hero } from '../../hero/hero';
import { Card } from '../../card/card';
import { Accordion } from '../../accordion/accordion';
import { Button } from '../../button/button';
import { CommonModule, NgForOf } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-components-overview',
  imports: [Hero, Card, Accordion, Button, CommonModule, NgForOf, NgIf],
  templateUrl: './components-overview.html',
  styleUrl: './components-overview.css'
})
export class ComponentsOverview {
projects = [
  {
    name: 'Hallo Anton',
    description: 'Hallo Welt',
    image: 'https://picsum.photos/seed/784/1280/720',
    url: 'https://google.com'
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
    name: 'Neue Karte',
    description: 'A sleek personal portfolio built with Angular.',
    image: 'https://picsum.photos/seed/pfui/1280/720',
    url: 'https://myportfolio.com'
  }
];

faq = [
  {
    frage: "Was ist dieses Projekt / Produkt?",
    antwort: "Unser Produkt ist eine webbasierte Plattform, mit der Sie Aufgaben effizient verwalten, Projekte organisieren und in Teams zusammenarbeiten können – alles an einem Ort."
  },
  {
    frage: "Für wen ist das geeignet?",
    antwort: "Unsere Lösung richtet sich an kleine bis mittelgroße Unternehmen, Freelancer, Agenturen und Teams, die klare Strukturen, Kommunikation und effizientes Aufgabenmanagement suchen."
  },
  {
    frage: "Muss ich etwas installieren?",
    antwort: "Nein, unsere Anwendung läuft vollständig im Browser. Es ist keine Installation notwendig – einfach anmelden und loslegen."
  }
];


}
