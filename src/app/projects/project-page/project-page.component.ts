import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {
  projectId: string | undefined;
  projectName: string | undefined;
  projectDescription: string | undefined;
  videoUrl: string | undefined;
  languagesUsed: string[] | undefined;
  projectSubtitle: string | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectId = params['id'];
      // Lógica para obtener los datos del proyecto según el ID
      // Aquí se pueden hacer llamadas a un servicio para obtener los datos del proyecto
      this.loadProjectData(this.projectId!);
    });
  }

  loadProjectData(id: string) {
    // Ejemplo de datos de proyecto, reemplazar con datos reales o una llamada a un servicio
    const projectData = {
      name: 'Mi Proyecto',
      description: 'Esta es una descripción de mi proyecto.',
      subtitle: 'Next JS',
    };

    this.projectName = projectData.name;
    this.projectSubtitle = projectData.subtitle;
    this.projectDescription = projectData.description;
  }

  goBack() {
    this.router.navigate(['/projects']);
  }

  

}
