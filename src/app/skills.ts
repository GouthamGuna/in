import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInUp, staggerContainer } from './animations';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  animations: [fadeInUp, staggerContainer],
  template: `
    <section id="skills" [@fadeInUp]>
      <h2 class="section-title">Technical Skills</h2>
      <div class="skills-grid" [@staggerContainer]>
        <div class="skill-category glass-card stagger-item" *ngFor="let cat of skillCategories">
          <h3 class="category-title">{{cat.title}}</h3>
          <div class="skills-list">
            <span class="skill-tag" *ngFor="let skill of cat.skills">{{skill}}</span>
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
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
    }
    .skill-category {
      padding: 30px;
      transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);
    }
    .skill-category:hover {
      transform: translateY(-5px);
      border-color: var(--accent-color);
      box-shadow: 0 15px 30px var(--accent-glow);
    }
    .category-title {
      color: var(--accent-color);
      margin-bottom: 20px;
      font-size: 1.25rem;
      border-bottom: 1px solid var(--glass-border);
      padding-bottom: 10px;
    }
    .skills-list {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    .skill-tag {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--glass-border);
      padding: 6px 14px;
      border-radius: 6px;
      font-size: 0.9rem;
      color: var(--text-secondary);
      transition: all 0.2s ease;
      cursor: default;
    }
    .skill-tag:hover {
      background: var(--accent-color);
      color: white;
      transform: scale(1.1) rotate(2deg);
      box-shadow: 0 5px 15px var(--accent-glow);
    }
  `]
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Back End & Core',
      skills: ['Java', 'Spring Boot', 'JDBC', 'J2EE', 'Hibernate', 'JPA', 'Event-Driven Architecture', 'Gradle', 'Maven']
    },
    {
      title: 'Front End',
      skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'JSP', 'jQuery']
    },
    {
      title: 'Cloud & Platforms',
      skills: ['GCP', 'GCS', 'Apigee', 'Okta', 'Docker', 'Git', 'Kubernetes', 'Helm']
    },
    {
      title: 'Databases & Tools',
      skills: ['PostgreSQL', 'MongoDB', 'SQL', 'NoSQL', 'Solace', 'ELK Stack', 'Dynatrace']
    }
  ];
}
