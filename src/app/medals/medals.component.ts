import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 1. Importa o FormsModule para o input funcionar
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrophy, faTicketAlt } from '@fortawesome/free-solid-svg-icons';

// Define a estrutura de uma Medalha
export interface Medal {
  name: string;
  imageUrl: string;
  description: string;
  unlocked: boolean;
}

@Component({
  selector: 'app-medals',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, // 2. Adiciona o FormsModule aos imports
    FontAwesomeModule
  ],
  templateUrl: './medals.component.html',
  styleUrls: ['./medals.component.css']
})
export class MedalsComponent {
  // Ícones para os títulos
  faTrophy = faTrophy;
  faTicketAlt = faTicketAlt;

  // Variável para o campo de input
  redeemCode: string = '';

  // Lista de todas as medalhas disponíveis (com exemplos de bloqueadas/desbloqueadas)
  allMedals: Medal[] = [
  { 
    name: 'Fiel da Live', 
    imageUrl: 'assets/imgs/medals/medal-loyal.png', 
    description: 'Não perde uma live e está sempre presente para apoiar!', 
    unlocked: true 
  },
  { 
    name: 'Natal com a Elisa', 
    imageUrl: 'assets/imgs/medals/medal-christmas.png', 
    description: 'Celebrou as festas de fim de ano na live especial de Natal!', 
    unlocked: true 
  },
  { 
    name: 'Amigo Fiel', 
    imageUrl: 'assets/imgs/medals/medal-dog.png', 
    description: 'Para os amantes de pets e amigos do mascote do canal!', 
    unlocked: true 
  },
  { 
    name: 'Lenda do CS', 
    imageUrl: 'assets/imgs/medals/medal-cs.png', 
    description: 'Para quem garante aquele headshot preciso no Counter-Strike.', 
    unlocked: true 
  },
  { 
    name: 'Sobrevivente do Gulag', 
    imageUrl: 'assets/imgs/medals/medal-warzone.png', 
    description: 'Voltou do Gulag no Warzone e garantiu a vitória para o squad.', 
    unlocked: false 
  },
  { 
    name: 'Energia Monstra', 
    imageUrl: 'assets/imgs/medals/medal-energy.png', 
    description: 'Aquele que tem a mesma energia da streamer, movido a... energéticos!', 
    unlocked: false 
  },
  { 
    name: 'Veterana - 1 Ano', 
    imageUrl: 'assets/imgs/medals/medal-1-ano.png', 
    description: 'Comemorou o primeiro aniversário do canal junto com a gente!', 
    unlocked: true 
  },
  { 
    name: 'Parceiro de Live', 
    imageUrl: 'assets/imgs/medals/medal-partner.png', 
    description: 'Para os VIPs e parceiros que fortalecem a comunidade todos os dias.', 
    unlocked: false 
  },
];

  redeemMedal(): void {
    if (!this.redeemCode) {
      alert('Por favor, digite um código.');
      return;
    }
    // Lógica para resgatar a medalha
    // No futuro, isso faria uma chamada para um servidor para validar o código
    console.log(`Tentando resgatar o código: ${this.redeemCode}`);
    alert(`Medalha com o código "${this.redeemCode}" resgatada com sucesso! (Exemplo)`);
    this.redeemCode = ''; // Limpa o campo
  }
}