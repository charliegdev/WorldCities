import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Toolbar } from 'primeng/toolbar';
import { Prime } from '@primeicons/angular/prime';
import { ButtonDirective } from 'primeng/button';

@Component({
  imports: [RouterLink, Toolbar, ButtonDirective, Prime],
  selector: 'app-nav-menu',
  styleUrl: './nav-menu.scss',
  templateUrl: './nav-menu.html',
})
export class NavMenu {}
