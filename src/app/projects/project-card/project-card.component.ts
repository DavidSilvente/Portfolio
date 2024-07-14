import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() title: string | undefined;
  @Input() codeLink: string | undefined;
  @Input() previewLink: string | undefined;
  @Input() imageUrl: string | undefined;
}
