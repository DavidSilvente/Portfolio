import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
  currentSection: string = 'me';
  isHomePage: boolean = true;
  currentLang: string = 'es';
  menuActive: boolean = false;

  constructor(private router: Router, private translate: TranslateService, private elementRef: ElementRef, private renderer: Renderer2) {
    // Suscribirse a los eventos de navegación para determinar la ruta actual
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = (event.url === '/' || event.url === '/home');
      }
    });

    // Establecer el idioma por defecto
    this.translate.setDefaultLang(this.currentLang);
  }

  ngOnInit(): void {}

  toggleMenu() {
    this.menuActive = !this.menuActive;

    if (this.menuActive) {
      document.body.classList.add('menu-active');
    } else {
      document.body.classList.remove('menu-active');
    }

  }

  handleMenuClick(action: string) {
    if (['me', 'projects', 'about', 'contact'].includes(action)) {
      this.scrollTo(action);
    } else {
      this.closeMenu();
    }
  }

  closeMenu() {
    console.log('Closing menu');
    this.menuActive = false;
    this.renderer.setStyle(document.body, 'overflow', 'auto');
  }

  scrollTo(section: string) {
    this.menuActive = false;
    document.body.style.overflow = 'auto';
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  switchLanguage() {
    this.currentLang = this.currentLang === 'es' ? 'en' : 'es';
    this.translate.use(this.currentLang);
    this.menuActive = false;
    document.body.style.overflow = 'auto';
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    console.log('Document clicked', targetElement);

    if (this.menuActive && !this.elementRef.nativeElement.contains(targetElement)) {
      this.closeMenu();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.getElementById('navbar');
    const menu = document.getElementById('menu');
    const sections = document.querySelectorAll('section');
    let currentSectionId = '';

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        currentSectionId = section.id;
      }
    });

    this.currentSection = currentSectionId; // Default to 'me' if no section is found

    if (window.pageYOffset > 50) {
      menu?.classList.add('bg-black', 'shadow-lg');
      menu?.classList.remove('bg-transparent');
      navbar?.classList.add('bg-black', 'shadow-lg');
      navbar?.classList.remove('bg-transparent');
    } else {
      menu?.classList.add('bg-transparent');
      menu?.classList.remove('bg-black', 'shadow-lg');
      navbar?.classList.add('bg-transparent');
      navbar?.classList.remove('bg-black', 'shadow-lg');
    }
  }
}
