import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// 1. Importe o faEnvelope junto com os outros ícones
import { faHouse, faUser, faCalendar, faGear, faChevronRight, faChevronLeft, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isExpanded = false;

  @Output() onToggleSidebar = new EventEmitter<boolean>();

  faHouse = faHouse;
  faUser = faUser;
  faCalendar = faCalendar;
  faGear = faGear;
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;
  // 2. Disponibilize o novo ícone para o template
  faEnvelope = faEnvelope;

  toggleSidebar(): void {
    this.isExpanded = !this.isExpanded;
    this.onToggleSidebar.emit(this.isExpanded);
  }
}