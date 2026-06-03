import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SeoService } from '../../core/services/seo.service';
import { LogoComponent } from '../../shared/components/logo/logo.component';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [FormsModule, LogoComponent],
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.scss',
})
export class MaintenanceComponent implements OnInit {
  private seo = inject(SeoService);
  email = '';
  submitted = false;
  year = new Date().getFullYear();

  ngOnInit() {
    this.seo.update({ title: 'Under Maintenance — Zellavora' });
  }

  handleNotify(e: Event) {
    e.preventDefault();
    if (!this.email) return;
    this.submitted = true;
  }
}
