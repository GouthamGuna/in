import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInUp, staggerContainer } from './animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  animations: [fadeInUp, staggerContainer],
  template: `
    <section id="projects" [@fadeInUp]>
      <h2 class="section-title">Key Projects</h2>
      <div class="projects-grid" [@staggerContainer]>
        <div class="project-card glass-card stagger-item" *ngFor="let project of projects">
          <div class="project-info">
            <h3 class="project-name">{{project.name}}</h3>
            <p class="project-desc">{{project.description}}</p>
            <div class="project-tech">
              <span *ngFor="let tech of project.tech">{{tech}}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-title {
      font-size: 2.5rem;
      margin-bottom: 50px;
      text-align: center;
    }
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 30px;
    }
    .project-card {
      padding: 40px;
      display: flex;
      flex-direction: column;
      height: 100%;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);
    }
    .project-card:hover {
      transform: translateY(-10px) scale(1.02);
      border-color: var(--accent-color);
      box-shadow: 0 20px 40px var(--accent-glow);
    }
    .project-name {
      font-size: 1.5rem;
      color: var(--text-primary);
      margin-bottom: 16px;
    }
    .project-desc {
      color: var(--text-secondary);
      margin-bottom: 24px;
      flex-grow: 1;
    }
    .project-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .project-tech span {
      font-size: 0.8rem;
      background: var(--accent-glow);
      color: var(--accent-color);
      padding: 4px 10px;
      border-radius: 4px;
      font-weight: 600;
    }
  `]
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Vehicle Time Series Analytics',
      description: 'Distributed system for high-throughput vehicle telemetry ingestion and archival using GCP and MongoDB.',
      tech: ['Java 17', 'GCP', 'Cloud Functions', 'MongoDB']
    },
    {
      name: 'Enterprise School Management',
      description: 'Full-featured ERP for educational institutions covering admissions, fees, and academic records.',
      tech: ['Java', 'Spring Boot', 'SQL', 'Angular']
    },
    {
      name: 'SDV Software Orchestrator',
      description: 'Master-Slave ECU update system with Solace-driven event bus for reliable software delivery.',
      tech: ['Spring Boot', 'Solace', 'PostgreSQL']
    },
    {
      name: 'Campus Information System',
      description: 'Scalable college management suite with PIMS, exam modules, and inventory controls.',
      tech: ['Java EE', 'Hibernate', 'PostgreSQL']
    },
    {
      name: 'Attendance Tracking System',
      description: 'Digital payroll and personal identification management system with real-time reporting.',
      tech: ['Java', 'Spring MVC', 'MySQL']
    }
  ];
}
