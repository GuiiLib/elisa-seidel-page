import { Component, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importa o Swiper para podermos registrá-lo
import { register } from 'swiper/element/bundle';

// 1. Define a estrutura de um post
export interface InstagramPost {
  postUrl: string;
  imageUrl: string;
  likes: number;
  comments: number;
}

// Registra os elementos do Swiper
register();

@Component({
  selector: 'app-instagram-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instagram-carousel.component.html',
  styleUrls: ['./instagram-carousel.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // 2. Permite o uso de tags customizadas como <swiper-container>
})
export class InstagramCarouselComponent implements AfterViewInit {

  // 3. O componente receberá os dados dos posts como um Input
  @Input() posts: InstagramPost[] = [];
  @Input() instagramProfileUrl: string = 'https://www.instagram.com/elisaseidel';
  @Input() profileUsername: string = 'elisaseidel';

  ngAfterViewInit(): void {
    // Configurações do Swiper podem ser feitas aqui se necessário
  }
}