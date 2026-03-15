import { Component, signal, effect, inject, PLATFORM_ID, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HeroComponent } from './hero';
import { ExperienceComponent } from './experience';
import { SkillsComponent } from './skills';
import { ProjectsComponent } from './projects';
import { ContactComponent } from './contact';
import { CertificatesComponent } from './certificates';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    CertificatesComponent,
    ContactComponent
  ],
  templateUrl: './app.html'
})
export class App {
  title = 'Gowtham Sankar | Portfolio';
  isDarkMode = signal(true);
  showScrollToTop = signal(false);
  currentYear = new Date().getFullYear();

  techIcons = [
    { class: 'fa-brands fa-java', left: '10%', delay: '0s' },
    { class: 'fa-brands fa-python', left: '20%', delay: '5s' },
    { class: 'fa-solid fa-leaf', left: '30%', delay: '2s' }, // Spring Boot
    { class: 'fa-brands fa-google', left: '40%', delay: '8s' }, // GCP
    { class: 'fa-brands fa-aws', left: '50%', delay: '3s' },
    { class: 'fa-brands fa-github', left: '60%', delay: '12s' },
    { class: 'fa-brands fa-docker', left: '70%', delay: '1s' },
    { class: 'fa-brands fa-angular', left: '80%', delay: '7s' },
    { class: 'fa-brands fa-js', left: '90%', delay: '4s' },
    { class: 'fa-brands fa-react', left: '15%', delay: '9s' },
    { class: 'fa-solid fa-database', left: '25%', delay: '11s' }, // DB
    { class: 'fa-solid fa-server', left: '35%', delay: '6s' }, // J2EE/Backend
    { class: 'fa-solid fa-cloud', left: '45%', delay: '15s' },
    { class: 'fa-solid fa-code', left: '55%', delay: '10s' },
    { class: 'fa-brands fa-html5', left: '65%', delay: '14s' },
    { class: 'fa-brands fa-css3-alt', left: '75%', delay: '13s' },
    { class: 'fa-solid fa-cubes', left: '85%', delay: '2s' } // Kubernetes/Containers
  ];

  private platformId = inject(PLATFORM_ID);

  constructor() {
    effect(() => {
      const theme = this.isDarkMode() ? 'dark' : 'light';
      if (isPlatformBrowser(this.platformId)) {
        document.body.setAttribute('data-theme', theme);
      }
    });
  }

  toggleTheme() {
    this.isDarkMode.update(v => !v);
  }

  @HostListener('contextmenu', ['$event'])
  onRightClick(event: MouseEvent) {
    event.preventDefault();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.showScrollToTop.set(window.pageYOffset > 500);
    }
  }

  scrollToTop() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
