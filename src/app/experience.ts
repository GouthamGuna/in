import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInUp, staggerContainer } from './animations';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  animations: [fadeInUp, staggerContainer],
  template: `
    <section id="experience" [@fadeInUp]>
      <h2 class="section-title">Experience</h2>
      <div class="timeline" [@staggerContainer]>
        <div class="timeline-item stagger-item" *ngFor="let exp of experiences">
          <div class="timeline-dot"></div>
          <div class="glass-card timeline-content">
            <h3 class="role">{{exp.role}}</h3>
            <h4 class="company">{{exp.company}}</h4>
            <span class="period">{{exp.period}}</span>
            <ul class="highlights">
              <li *ngFor="let item of exp.highlights">{{item}}</li>
            </ul>
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
    .timeline {
      position: relative;
      max-width: 800px;
      margin: 0 auto;
      padding-left: 30px;
      border-left: 2px solid var(--accent-glow);
    }
    .timeline-item {
      position: relative;
      margin-bottom: 40px;
      transition: transform 0.3s ease;
    }
    .timeline-item:hover {
      transform: translateX(10px);
    }
    .timeline-dot {
      position: absolute;
      left: -37px;
      top: 0;
      width: 12px;
      height: 12px;
      background: var(--accent-color);
      border-radius: 50%;
      box-shadow: 0 0 10px var(--accent-color);
      transition: transform 0.3s ease;
    }
    .timeline-item:hover .timeline-dot {
      transform: scale(1.5);
    }
    .timeline-content {
      padding: 30px;
      transition: all 0.3s ease;
    }
    .timeline-item:hover .timeline-content {
      border-color: var(--accent-color);
      box-shadow: 0 10px 30px var(--accent-glow);
    }
    .role {
      font-size: 1.5rem;
      color: var(--text-primary);
      margin-bottom: 4px;
    }
    .company {
      font-size: 1.1rem;
      color: var(--accent-color);
      margin-bottom: 8px;
    }
    .period {
      display: inline-block;
      font-size: 0.9rem;
      color: var(--text-secondary);
      margin-bottom: 16px;
      font-weight: 500;
      background: rgba(255, 255, 255, 0.05);
      padding: 4px 12px;
      border-radius: 20px;
    }
    .highlights {
      list-style: none;
    }
    .highlights li {
      color: var(--text-secondary);
      margin-bottom: 8px;
      position: relative;
      padding-left: 20px;
    }
    .highlights li::before {
      content: '→';
      position: absolute;
      left: 0;
      color: var(--accent-color);
    }
  `]
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Lead Software Developer',
      company: 'RNTBCI (Onward Technologies)',
      period: 'August 2024 — Present',
      highlights: [
        'Architecting vehicle data solutions on Google Cloud Platform.',
        'Developing cloud-native APIs using Cloud Run and MongoDB.',
        'Optimizing .mf4 data ingestion pipelines for large-scale operations.',
        'Managing ECU service provider apps with focus on scalability and observability.'
      ]
    },
    {
      role: 'Full Stack Java Developer',
      company: 'CERP Software Services',
      period: 'August 2021 — August 2024',
      highlights: [
        'Built enterprise-grade School and College management platforms.',
        'Automated academic workflows, grading systems, and financial modules.',
        'Implemented secure attendance tracking and personnel management systems.'
      ]
    },
    /*{
      role: 'Junior Web Developer',
      company: 'DHIVT IT Infrastructure',
      period: 'July 2020 — August 2021',
      highlights: [
        'Developed interactive web applications using Spring Boot and Angular.',
        'Integrated RESTful web services and optimized backend database performance.'
      ]
    },*/
    {
      role: 'B.E. in Electrical & Electronics',
      company: 'Muthayammal Engineering College (Anna University)',
      period: '2017 — 2020',
      highlights: ['Completion of a degree emphasizing core fundamentals of electrical and electronic engineering.']
    },
    {
      role: 'Diploma in Electrical & Electronics',
      company: 'Maruthi Polytechnic College',
      period: '2014 — 2017',
      highlights: ['Technical training in electrical systems and initial exposure to computational logic.']
    }
  ];
}
