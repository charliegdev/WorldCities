import { Component } from '@angular/core';
import { Toolbar } from 'primeng/toolbar';
import { Prime } from '@primeicons/angular/prime';
import { ButtonDirective } from 'primeng/button';

@Component({
  imports: [Toolbar, ButtonDirective, Prime],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}
