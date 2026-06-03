import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { WhatsappWidgetComponent } from './whatsapp-widget/whatsapp-widget.component';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NgIf, NavbarComponent, FooterComponent, WhatsappWidgetComponent],
  template: `
    @if (!maintenance) {
      <app-navbar />
    }
    <main class="layout__main">
      <ng-content />
    </main>
    @if (!maintenance) {
      <app-footer />
      <app-whatsapp-widget />
    }
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }
      .layout__main {
        flex: 1;
      }
    `,
  ],
})
export class LayoutComponent {
  readonly maintenance = environment.maintenanceMode;
}
