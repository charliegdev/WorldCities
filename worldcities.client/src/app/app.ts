import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { NavMenu } from './nav-menu/nav-menu';

@Component({
  imports: [RouterOutlet, NavMenu],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('worldcities.client');
}
