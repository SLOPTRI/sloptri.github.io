import { Component, inject, OnInit, OnDestroy, signal } from '@angular/core';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  dataService = inject(DataService);
  aboutInfo = this.dataService.aboutInfo;
  experiences = this.dataService.experiences;

  // Typing effect state
  currentInterestIndex = 0;
  currentCharIndex = 0;
  isDeleting = false;
  typingText = signal('');
  typingInterval: any;

  ngOnInit() {
    this.startTypingEffect();
  }

  ngOnDestroy() {
    if (this.typingInterval) {
      clearTimeout(this.typingInterval);
    }
  }

  startTypingEffect() {
    const interests = this.aboutInfo().interests;
    const currentWord = interests[this.currentInterestIndex];

    if (this.isDeleting) {
      this.typingText.set(currentWord.substring(0, this.currentCharIndex - 1));
      this.currentCharIndex--;
    } else {
      this.typingText.set(currentWord.substring(0, this.currentCharIndex + 1));
      this.currentCharIndex++;
    }

    let typeSpeed = this.isDeleting ? 50 : 100;

    if (!this.isDeleting && this.currentCharIndex === currentWord.length) {
      typeSpeed = 2000; // Pause at end of word
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentInterestIndex = (this.currentInterestIndex + 1) % interests.length;
      typeSpeed = 500; // Pause before new word
    }

    this.typingInterval = setTimeout(() => this.startTypingEffect(), typeSpeed);
  }
}
