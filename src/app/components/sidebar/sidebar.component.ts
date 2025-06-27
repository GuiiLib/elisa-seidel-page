import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHouse, faUser, faCalendar, faGear, faChevronRight, faChevronLeft, faEnvelope, faMedal, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  // --- Lógica para o DESKTOP ---
  isExpanded = false;
  @Output() onToggleSidebar = new EventEmitter<boolean>();

  // --- Lógica para o CELULAR ---
  isMobileMenuOpen = false;

  // --- Ícones ---
  faHouse = faHouse;
  faUser = faUser;
  faCalendar = faCalendar;
  faGear = faGear;
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;
  faMedal = faMedal;
  faEnvelope = faEnvelope;
  faBars = faBars; // Ícone do "Hamburger"

  // Função para expandir/encolher no DESKTOP
  toggleDesktopSidebar(): void {
    this.isExpanded = !this.isExpanded;
    this.onToggleSidebar.emit(this.isExpanded);
  }

  // Função para abrir/fechar no CELULAR
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  
  // Função para fechar o menu mobile ao clicar em um link
  closeMenuOnNavigate(): void {
    if (this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
    }
  }
}