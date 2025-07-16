import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { About } from './components/pages/about/about';
import { ComponentsOverview } from './components/pages/components-overview/components-overview';

export const routes: Routes = [
    {path: "", component: Home},
    {path: "about", component: About},
    {path: "components", component: ComponentsOverview},
    {path:"**", component: Home}
];
