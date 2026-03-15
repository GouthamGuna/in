import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section id="contact">
      <h2 class="section-title">Get In Touch</h2>
      <div class="contact-container glass-card">
        <div class="contact-methods">
          <div class="method">
            <span class="label">Email</span>
            <a href="mailto:ggowthamsankar@gmail.com" class="value">ggowthamsankar@gmail.com</a>
          </div>
          <div class="method">
            <span class="label">Phone</span>
            <a href="tel:+917868949536" class="value">+91 7868949536</a>
          </div>
          <div class="method">
            <span class="label">Location</span>
            <span class="value">Chennai, Tamil Nadu, IN</span>
          </div>
        </div>

        @if (!submitted) {
          <form class="contact-form" (submit)="handleSubmit($event)">
            <!-- FormSubmit.co Integration -->
            <input type="hidden" name="_subject" value="New Portfolio Message!">
            <input type="hidden" name="_template" value="table">
            <input type="hidden" name="_captcha" value="false">

            <div class="form-group">
              <input type="text" name="name" placeholder="Your Name" required>
            </div>
            <div class="form-group">
              <input type="email" name="email" placeholder="Your Email" required>
            </div>
            <div class="form-group">
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn-primary" [disabled]="isSubmitting">
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        } @else {
          <div class="success-message">
            <div class="success-icon">✓</div>
            <h3>Thank you for your mail!</h3>
            <p>I'll get back to you as soon as possible.</p>
            <p class="timer-msg">Form will reset in {{ countdown }} seconds...</p>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .section-title {
      font-size: 2.5rem;
      margin-bottom: 50px;
      text-align: center;
    }
    .contact-container {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 50px;
      padding: 60px;
    }
    .contact-methods {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
    .method .label {
      display: block;
      color: var(--accent-color);
      font-size: 0.9rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 8px;
    }
    .method .value {
      font-size: 1.2rem;
      color: var(--text-primary);
      text-decoration: none;
      transition: var(--transition);
    }
    .method a.value:hover {
      color: var(--accent-color);
    }
    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .form-group input, .form-group textarea {
      width: 100%;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--glass-border);
      padding: 15px;
      border-radius: 8px;
      color: white;
      font-family: inherit;
      transition: var(--transition);
    }
    .form-group input:focus, .form-group textarea:focus {
      outline: none;
      border-color: var(--accent-color);
      background: rgba(255, 255, 255, 0.08);
    }
    .success-message {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 40px;
      gap: 16px;
    }
    .success-icon {
      width: 60px;
      height: 60px;
      background: var(--accent-color);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
      margin-bottom: 20px;
      box-shadow: 0 0 20px var(--accent-glow);
    }
    .btn-outline {
      border: 1px solid var(--accent-color);
      color: var(--accent-color);
      padding: 8px 16px;
      border-radius: 8px;
      background: transparent;
      cursor: pointer;
      font-weight: 500;
      margin-top: 10px;
    }
    .timer-msg {
      font-size: 0.85rem;
      color: var(--text-secondary);
      font-style: italic;
      margin-top: 10px;
    }
    @media (max-width: 768px) {
      .contact-container {
        grid-template-columns: 1fr;
        padding: 30px;
      }
    }
  `]
})
export class ContactComponent {
  submitted = false;
  isSubmitting = false;
  countdown = 5;

  async handleSubmit(event: Event) {
    event.preventDefault();
    this.isSubmitting = true;

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/ggowthamsankar@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        this.submitted = true;
        this.countdown = 5;
        
        const interval = setInterval(() => {
          this.countdown--;
          if (this.countdown <= 0) {
            clearInterval(interval);
            this.submitted = false;
          }
        }, 1000);
      }
    } catch (error) {
      console.error("Submission failed", error);
      alert("Oops! There was a problem submitting your form.");
    } finally {
      this.isSubmitting = false;
    }
  }
}
