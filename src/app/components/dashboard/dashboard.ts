import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, MatCardModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  cards = [
    { 
      id: 1,
      title: 'NEURAL NETWORK', 
      description: 'Access the data matrix and view system analytics',
      icon: '🧠',
      clickable: true
    },
    { 
      id: 2,
      title: 'SCHEDULE', 
      description: 'Monitor firewall status and threat detection',
      icon: '📅',
      clickable: false
    },
    { 
      id: 3,
      title: 'DATA STREAM', 
      description: 'Real-time data flow visualization',
      icon: '📡',
      clickable: false
    },
    { 
      id: 4,
      title: 'QUANTUM CORE', 
      description: 'System performance and resource allocation',
      icon: '⚡',
      clickable: false
    }
  ];

  constructor(private router: Router) {}

  onCardClick(card: any) {
    if (card.clickable) {
      this.router.navigate(['/data-table']);
    }
  }
}
