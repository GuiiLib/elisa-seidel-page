import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importa e registra o Swiper para o carrossel funcionar
import { register } from 'swiper/element/bundle';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
register();

// Define uma estrutura para os dados de cada vídeo
export interface YouTubeVideo {
  videoId: string; // Ex: "dQw4w9WgXcQ"
  title: string;
}

@Component({
  selector: 'app-youtube-carousel',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './youtube-carousel.component.html',
  styleUrls: ['./youtube-carousel.component.css'],
  // Permite o uso de tags customizadas como <swiper-container> no HTML
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class YoutubeCarouselComponent {
  // @Input permite que estes dados venham do componente pai (ex: home.component)
  @Input() videos: YouTubeVideo[] = [];
  @Input() channelUrl: string = '';
  @Input() channelName: string = '';

  faYoutube = faYoutube;

  // Função para gerar a URL da miniatura (thumbnail) a partir do ID do vídeo
  getThumbnailUrl(videoId: string): string {
    return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  }

  // Função para gerar a URL completa do vídeo para abrir em outra aba
  getVideoUrl(videoId: string): string {
    return `https://www.youtube.com/watch?v=dQw4w9WgXcQ`;
  }
}