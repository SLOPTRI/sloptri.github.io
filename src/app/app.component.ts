import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { DataService } from './core/services/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  dataService = inject(DataService);
  theme = this.dataService.theme;

  private isMobileMenuOpenSignal = signal(false);
  public isMobileMenuOpen = this.isMobileMenuOpenSignal.asReadonly();

  toggleMobileMenu(forceState?: boolean) {
    if (forceState !== undefined) {
      this.isMobileMenuOpenSignal.set(forceState);
    } else {
      this.isMobileMenuOpenSignal.update(val => !val);
    }
    
    // Prevent body scroll when menu is open
    if (this.isMobileMenuOpenSignal()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  toggleTheme() {
    this.dataService.toggleTheme();
  }
}
