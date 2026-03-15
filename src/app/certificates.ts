import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInUp, staggerContainer } from './animations';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  animations: [fadeInUp, staggerContainer],
  template: `
    <section id="certificates" [@fadeInUp]>
      <h2 class="section-title">Licenses & Certifications</h2>
      <div class="certs-grid" [@staggerContainer]>
        <div class="cert-card glass-card stagger-item" *ngFor="let cert of certificates">
          <div class="cert-logo">
            <div class="logo-placeholder" [style.background]="cert.color">
              {{cert.issuer[0]}}
            </div>
          </div>
          <div class="cert-info">
            <h3 class="cert-name">{{cert.name}}</h3>
            <p class="cert-issuer">{{cert.issuer}}</p>
            <p class="cert-date">Issued {{cert.date}}</p>
            <p class="cert-id" *ngIf="cert.id">Credential ID {{cert.id}}</p>
            <a [href]="cert.url" target="_blank" class="cert-link">See credential <span>↗</span></a>
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
    .certs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
      gap: 24px;
    }
    .cert-card {
      display: flex;
      gap: 20px;
      padding: 30px;
      align-items: flex-start;
      transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);
    }
    .cert-card:hover {
      transform: translateY(-5px);
      border-color: var(--accent-color);
      box-shadow: 0 15px 30px var(--accent-glow);
    }
    .logo-placeholder {
      width: 60px;
      height: 60px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: 800;
      color: white;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    .cert-info {
      flex: 1;
    }
    .cert-name {
      font-size: 1.25rem;
      color: var(--text-primary);
      margin-bottom: 4px;
    }
    .cert-issuer {
      font-size: 1rem;
      color: var(--text-primary);
      margin-bottom: 4px;
    }
    .cert-date, .cert-id {
      font-size: 0.9rem;
      color: var(--text-secondary);
      margin-bottom: 2px;
    }
    .cert-link {
      display: inline-block;
      margin-top: 12px;
      color: var(--accent-color);
      text-decoration: none;
      font-weight: 600;
      font-size: 0.95rem;
      transition: var(--transition);
    }
    .cert-link:hover {
      color: var(--accent-hover);
      text-decoration: underline;
    }
    @media (max-width: 600px) {
      .certs-grid {
        grid-template-columns: 1fr;
      }
      .cert-card {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
    }
  `]
})
export class CertificatesComponent {
  certificates = [
    {
      name: 'Google Cloud Fundamentals: Core Infrastructure',
      issuer: 'Google Cloud Skills Boost',
      date: 'Nov 2024',
      id: '13057346',
      url: 'https://partner.skills.google/public_profiles/9b7bed70-ee9c-4bb1-95ec-fd11b246759b/badges/13057346',
      color: '#4285F4'
    },
    {
      name: 'SQL (Basic) Certificate',
      issuer: 'HackerRank',
      date: 'Nov 2024',
      id: 'BD0081646746',
      url: 'https://www.hackerrank.com/certificates/bd0081646746',
      color: '#2EC866'
    },
    {
      name: 'Preparing for Your Associate Cloud Engineer Journey',
      issuer: 'Google Cloud Skills Boost',
      date: 'Oct 2024',
      id: '12496649',
      url: 'https://partner.skills.google/public_profiles/9b7bed70-ee9c-4bb1-95ec-fd11b246759b/badges/12496649',
      color: '#4285F4'
    },
    {
      name: 'JavaScript (Intermediate)',
      issuer: 'HackerRank',
      date: 'Aug 2024',
      url: 'https://www.hackerrank.com/certificates/7027b49c84f1',
      color: '#2EC866'
    },
    {
      name: 'JavaScript (Basic)',
      issuer: 'HackerRank',
      date: 'Jul 2024',
      url: 'https://www.hackerrank.com/certificates/c076fccd77e5',
      color: '#2EC866'
    },
    {
      name: 'Angular (Basic)',
      issuer: 'HackerRank',
      date: 'Jul 2024',
      url: 'https://www.hackerrank.com/certificates/ea4e8eb17a30',
      color: '#2EC866'
    },
    {
      name: 'React (Basic)',
      issuer: 'HackerRank',
      date: 'Jul 2024',
      url: 'https://www.hackerrank.com/certificates/bb8bc984221d',
      color: '#2EC866'
    },
    {
      name: 'Docker Training Course for the Absolute Beginner',
      issuer: 'KodeKloud',
      date: 'Sep 2022',
      id: '85DE05135C-85D8008CBA-85D7D2030E',
      url: 'https://learn.kodekloud.com/certificate/85DE05135C-85D8008CBA-85D7D2030E',
      color: '#0db7ed'
    },
    {
      name: 'AWS Foundations: Securing Your AWS Cloud',
      issuer: 'Coursera',
      date: 'Apr 2022',
      id: 'ZMT93QNKWQGN',
      url: 'https://www.coursera.org/account/accomplishments/verify/ZMT93QNKWQGN',
      color: '#0056D2'
    }
  ];
}
