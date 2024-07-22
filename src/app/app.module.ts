import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule   } from '@angular/forms';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ProjectCardComponent } from './projects/project-card/project-card.component';
import { CorreoService } from './correo.service';
import { MessageSuccessFailComponent } from './message-success-fail/message-success-fail.component';
import { ProjectPageComponent } from './projects/project-page/project-page.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { ThemeService } from './theme.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({ declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ProjectsComponent,
        ContactComponent,
        ProjectCardComponent,
        MessageSuccessFailComponent,
        ProjectPageComponent,
        ThemeToggleComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule, TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })], providers: [CorreoService,
        ThemeService, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
