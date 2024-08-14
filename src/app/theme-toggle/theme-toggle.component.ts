// theme-toggle.component.ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-toggle',
  template: `
    <svg id="light" *ngIf="currentTheme === 'light'" class="theme-toggle-icon size-5 transition-all"
         width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
         stroke="currentColor" fill="none" stroke-linecap="round"
         stroke-linejoin="round" (click)="toggleTheme()">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
      <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
    </svg>
    <svg id="dark" *ngIf="currentTheme === 'dark'" class="theme-toggle-icon size-5 transition-all"
         width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
         stroke="currentColor" fill="none" stroke-linecap="round"
         stroke-linejoin="round" (click)="toggleTheme()">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
    </svg>
  `,
  styles: [`
    .theme-toggle-icon {
      cursor: pointer;
    }
  `]
})
export class ThemeToggleComponent implements OnInit {
  currentTheme: string | undefined;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.currentTheme = this.themeService.getCurrentTheme();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    this.currentTheme = this.themeService.getCurrentTheme();
  }
}
