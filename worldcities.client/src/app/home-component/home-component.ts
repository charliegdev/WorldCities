import { Component } from '@angular/core';
import { Toolbar } from 'primeng/toolbar';
import { Prime } from '@primeicons/angular/prime';
import { ButtonDirective } from 'primeng/button';

@Component({
  imports: [Toolbar, ButtonDirective, Prime],
  selector: 'app-home-component',
  styleUrl: './home-component.scss',
  templateUrl: './home-component.html',
})
export class HomeComponent {}
