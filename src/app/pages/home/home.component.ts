import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  carouselImages = [
    { url: 'https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg', title: 'Clinical Excellence', sub: 'Driven by 70+ years of practicing medicine and deep domain knowledge.' },
    { url: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg', title: 'World-Class Technology', sub: 'Building scalable EHR solutions for healthcare providers worldwide.' },
    { url: 'https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg', title: 'Collaborative Innovation', sub: 'Our team of experts works tirelessly to transform healthcare delivery.' },
    { url: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg', title: 'EHR YOUR WAY', sub: 'One intelligent platform that grows with your practice.' },
    { url: 'https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg', title: 'Global Presence', sub: 'Headquartered in U.S.A. with a premier development center in India.' }
  ];

  services = [
    { 
      title: 'EHR YourWay', 
      desc: 'Flagship intelligent Electronic Health Record system for behavioral health practices.',
      img: 'https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg'
    },
    { 
      title: 'Medical Billing', 
      desc: 'Custom systems tailored for medical invoicing and revenue management.',
      img: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg'
    },
    { 
      title: 'Healthcare Apps', 
      desc: 'Building mobile and web apps specifically for the health domain.',
      img: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg'
    },
    { 
      title: 'Cybersecurity', 
      desc: 'Establishing secure networks for sensitive medical data.',
      img: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg'
    },
    { 
      title: 'Cloud Consulting', 
      desc: 'Advising on cloud-based infrastructure for healthcare systems.',
      img: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg'
    },
    { 
      title: 'Systems Integration', 
      desc: 'Integrating databases and legacy systems to improve workflow automation.',
      img: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg'
    },
    { 
      title: 'Technical Consultancy', 
      desc: 'Providing consultancy on hardware and software implementation globally.',
      img: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg'
    }
  ];

  currentIndex = 0;
  serviceIndex = 0;
  
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselImages.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
  }

  nextService() {
    if (this.serviceIndex < this.services.length - 3) {
      this.serviceIndex++;
    } else {
      this.serviceIndex = 0;
    }
  }

  prevService() {
    if (this.serviceIndex > 0) {
      this.serviceIndex--;
    } else {
      this.serviceIndex = this.services.length - 3;
    }
  }
}
