import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Importando os ícones de marcas e os novos ícones para o setup
import { 
  faInstagram, 
  faTwitch, 
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { 
  faGamepad, 
  faPaintBrush,
  faBullseye, 
  faCalendarAlt, 
  faDesktop, 
  faHeadphones, 
  faKeyboard, 
  faMicrochip,
  faMemory,
  faCamera,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

// Interface para estruturar os dados do setup
export interface SetupItem {
  icon: any;
  name: string;
  description: string;
}

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  // --- ÍCONES PARA O TEMPLATE ---
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faTwitch = faTwitch;
  faEnvelope = faEnvelope;
  faGamepad = faGamepad;
  faPaintBrush = faPaintBrush;
  faBullseye = faBullseye;
  faCalendarAlt = faCalendarAlt;
  faDesktop = faDesktop;
  faHeadphones = faHeadphones;
  faKeyboard = faKeyboard;
  faCamera = faCamera;
  faMicrochip = faMicrochip; // Ícone para CPU e Placa-mãe
  faMemory = faMemory;       // Ícone para RAM

  // --- DADOS REAIS DA STREAMER ---
  streamerName = "Elisa Seidel";
  introduction = "Oie! Sejam bem vindos 🌶️ Sou a Elisa Seidel, tenho 27 anos, sou publicitária e apaixonada por games, tô no YouTube desde 2014 e carrego comigo esse sonho de entreter a galera através das minhas gameplays um tanto quanto criminosas e divertidas! Espero que gostem e passem muito tempo comigo por aqui. 💜";
  
  // Mantive sugestões para ela preencher no futuro
  hobbies = [
    { icon: faGamepad, text: "Games Divertidos" },
    { icon: faPaintBrush, text: "Publicidade" },
  ];

  milestones = {
    twitchSince: "2020", // Ela pode ajustar este ano
    youtubeSince: "2014"
  };

  goals = "Meu maior objetivo é entreter a galera e criar um espaço seguro e divertido na internet, trazendo projetos cada vez maiores para vocês!";

  // Lista de equipamentos ATUALIZADA com os dados fornecidos
  setup: SetupItem[] = [
    { icon: faDesktop, name: "Placa de vídeo", description: "NVIDIA RTX 4060" },
    { icon: faMicrochip, name: "Processador", description: "AMD Ryzen 7 5800X" },
    { icon: faMemory, name: "Memória RAM", description: "32GB" },
    { icon: faMicrochip, name: "Placa-mãe", description: "Asus TUF B550M-PLUS" },
    { icon: faHeadphones, name: "Headset", description: "Fallen Morcego Roxo" },
    { icon: faKeyboard, name: "Teclado", description: "Motospeed K82 Rosa" },
    { icon: faCamera, name: "Webcam", description: "Logitech C920" },
  ];
}