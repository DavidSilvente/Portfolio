import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';

  scrollTo(section: string) {
    const element = document.getElementById(section);
    if(element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.getElementById('navbar');
    if (window.pageYOffset > 50) { // Adjust this value as needed
      navbar?.classList.add('bg-white', 'shadow-lg');
      navbar?.classList.remove('bg-transparent');
    } else {
      navbar?.classList.add('bg-transparent');
      navbar?.classList.remove('bg-white', 'shadow-lg');
    }
  }
}
