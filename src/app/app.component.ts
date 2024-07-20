import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
  currentSection: string = 'me';

  scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');
    let currentSectionId = '';

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        currentSectionId = section.id;
      }
    });

    this.currentSection = currentSectionId // Default to 'me' if no section is found

    if (window.pageYOffset > 50) {
      navbar?.classList.add('bg-black', 'shadow-lg');
      navbar?.classList.remove('bg-transparent');
    } else {
      navbar?.classList.add('bg-transparent');
      navbar?.classList.remove('bg-black', 'shadow-lg');
    }
  }
}
