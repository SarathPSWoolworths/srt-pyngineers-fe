import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

export interface DataRecord {
  id: string;
  name: string;
  status: string;
  threat: string;
  lastActive: string;
}

@Component({
  selector: 'app-data-table',
  imports: [CommonModule, MatTableModule, MatButtonModule],
  templateUrl: './data-table.html',
  styleUrl: './data-table.scss',
})
export class DataTable {
  displayedColumns: string[] = ['id', 'name', 'status', 'threat', 'lastActive'];
  
  dataSource: DataRecord[] = [
    { id: 'NX-001', name: 'Alpha Protocol', status: 'ACTIVE', threat: 'LOW', lastActive: '2026-04-28 14:32:00' },
    { id: 'NX-002', name: 'Delta Firewall', status: 'STANDBY', threat: 'NONE', lastActive: '2026-04-28 12:15:00' },
    { id: 'NX-003', name: 'Omega Cipher', status: 'ACTIVE', threat: 'HIGH', lastActive: '2026-04-28 14:28:00' },
    { id: 'NX-004', name: 'Sigma Matrix', status: 'OFFLINE', threat: 'CRITICAL', lastActive: '2026-04-27 23:45:00' },
    { id: 'NX-005', name: 'Tau Encryptor', status: 'ACTIVE', threat: 'MEDIUM', lastActive: '2026-04-28 14:30:00' },
    { id: 'NX-006', name: 'Gamma Shield', status: 'ACTIVE', threat: 'LOW', lastActive: '2026-04-28 13:55:00' },
    { id: 'NX-007', name: 'Beta Scanner', status: 'STANDBY', threat: 'NONE', lastActive: '2026-04-28 10:20:00' },
    { id: 'NX-008', name: 'Zeta Defender', status: 'ACTIVE', threat: 'HIGH', lastActive: '2026-04-28 14:31:00' },
  ];

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/dashboard']);
  }

  getThreatClass(threat: string): string {
    return 'threat-' + threat.toLowerCase();
  }

  getStatusClass(status: string): string {
    return 'status-' + status.toLowerCase();
  }
}
