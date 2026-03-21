import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero">
      <div class="hero-content">
        <h2 class="greeting">Hello, I'm</h2>
        <h1 class="name text-gradient">Gowtham Sankar G</h1>
        <h3 class="role">Software Developer</h3>
        <p class="summary">
          Goal-oriented Software Developer with 4.5+ years of experience in Java/J2EE, Spring Boot, and Angular. 
          Expert in designing scalable microservices and cloud-native applications on GCP.
        </p>
        <div class="cta">
          <a href="#contact" class="btn-primary">Hire Me</a>
          <a href="https://drive.google.com/file/d/1yxqtUDdhDhut6ArR7nAljWkrB--4lWYT/view?usp=sharing" target="_blank" class="btn-outline">Download CV</a>
        </div>
        <div class="social-links">
          <a href="https://github.com/GouthamGuna" target="_blank" title="GitHub">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
          </a>
          <a href="https://in.linkedin.com/in/gowtham-sankar-gunasekaran-a0a65431b" target="_blank" title="LinkedIn">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
          </a>
        </div>
      </div>
      <div class="hero-image">
        <div class="image-wrapper">
           <img [src]="avatarUrl" 
                (error)="handleImageError()"
                alt="Gowtham Sankar" 
                class="profile-img" 
                width="380" 
                height="380" 
                fetchpriority="high">
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 80vh;
      gap: 40px;
    }
    .hero-content {
      flex: 1;
    }
    .greeting {
      font-size: 1.5rem;
      color: var(--accent-color);
      margin-bottom: 8px;
    }
    .name {
      font-size: 4.5rem;
      line-height: 1.1;
      margin-bottom: 16px;
    }
    .role {
      font-size: 2rem;
      color: var(--text-secondary);
      margin-bottom: 24px;
    }
    .summary {
      font-size: 1.1rem;
      color: var(--text-secondary);
      max-width: 600px;
      margin-bottom: 40px;
    }
    .cta {
      display: flex;
      gap: 16px;
    }
    .btn-outline {
      border: 1px solid var(--accent-color);
      color: var(--accent-color);
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 600;
      text-decoration: none;
      transition: var(--transition);
    }
    .btn-outline:hover {
      background: var(--accent-glow);
    }
    .social-links {
      display: flex;
      gap: 20px;
      margin-top: 30px;
    }
    .social-links a {
      color: var(--text-secondary);
      transition: var(--transition);
    }
    .social-links a:hover {
      color: var(--accent-color);
      transform: translateY(-3px);
    }
    .hero-image {
      flex: 0.8;
      display: flex;
      justify-content: center;
    }
    .image-wrapper {
      width: 380px;
      height: 380px;
      position: relative;
      border-radius: 30px;
      overflow: hidden;
      box-shadow: 0 0 40px var(--accent-glow);
      border: 2px solid var(--glass-border);
      transition: var(--transition);
    }
    .image-wrapper:hover {
      transform: scale(1.02);
      border-color: var(--accent-color);
    }
    .profile-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media (max-width: 768px) {
      .hero {
        flex-direction: column-reverse;
        text-align: center;
        padding-top: 50px;
        margin-top: 80px;
      }
      .name { font-size: 3rem; }
      .cta, .social-links { justify-content: center; }
      .image-wrapper { width: 280px; height: 280px; }
    }
  `]
})
export class HeroComponent {
  avatarUrl = 'https://lh3.googleusercontent.com/pw/AP1GczP3ZY3ozN6PsMlYohYMr1dWeFqsCzCs5Ww2nuITZVxVuHf3S8D4lD1u8viYHPS4paWCC3RMQbXRJqPjTJQvCJjLE5IEtsYu4YxerOhu3FhwoJSUeDysvp3LZUZZnbs9N4NC5ZZrWom5CoZCr7TDmoIkVA=s0';
  fallbackUrl = '/assets/profilepic.jpg';

  handleImageError() {
    this.avatarUrl = this.fallbackUrl;
  }
}
