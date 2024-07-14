import { Component } from '@angular/core';

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

}
