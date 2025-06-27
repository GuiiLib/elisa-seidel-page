import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importa os componentes que serão usados na página Home
import { TwitchPlayer } from '../twitch-player/twitch-player.component';
import { TwitchChat } from '../twitch-chat/twitch-chat.component';
import { InstagramCarouselComponent, InstagramPost } from '../instagram-carousel/instagram-carousel.component';
import { YoutubeCarouselComponent, YouTubeVideo } from '../youtube-carousel/youtube-carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  // 1. Adiciona os novos componentes e o CommonModule ao array de imports
  imports: [
    CommonModule,
    TwitchPlayer,
    TwitchChat,
    InstagramCarouselComponent,
    YoutubeCarouselComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // 2. Variáveis para os componentes da Twitch
  // (Boa prática: defina os valores aqui em vez de diretamente no HTML)
  twitchChannel: string = 'elisaseidel';

  // 3. Variáveis para o componente do Instagram
  streamerUsername: string = 'elisaseidel';
  instagramProfileUrl: string = `https://instagram.com/${this.streamerUsername}`;

  // 4. Dados das fotos para o carrossel do Instagram
  // No futuro, estes dados virão do painel de controle do streamer
  streamerInstaPosts: InstagramPost[] = [

    {postUrl: 'https://www.instagram.com/p/DJxRgB0OC9k/?img_index=1', 
      imageUrl: 'https://scontent.fgru6-1.fna.fbcdn.net/v/t51.75761-15/485502057_18493237822046272_6763962159324511216_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=COTNCeMMg3wQ7kNvwFfuxFf&_nc_oc=Adl_LuI2XWZ64BzRmZ_oCwDiOJB-1fU7QHur-XooKfNtCcncaqGpbJ5Hl0nExzTkWDzTz--DgAtZNwVIa_GfDz_r&_nc_zt=23&_nc_ht=scontent.fgru6-1.fna&_nc_gid=y1JnrJXM_lqY1pOyAjCrmw&oh=00_AfPqo5DLOswG-FTAMPpIc8vB07VXyupUbDfOC9pOIV3xpA&oe=6864AB16', 
      likes: 398, 
      comments:28
    },
    { 
      postUrl: 'https://www.instagram.com/p/DBMMX6rOJk1/?img_index=1', 
      imageUrl: 'https://scontent.fgru6-1.fna.fbcdn.net/v/t51.75761-15/463222535_18463186783046272_944833993196882644_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeETPLA3sUkE2ocPm5LN-RQx8wdgDow0nELzB2AOjDScQt4kOPVLe00kyx012aPvsIhxJ9gfGLLujToe77G3HIcu&_nc_ohc=HSOGy5bc7OMQ7kNvwGZguPE&_nc_oc=AdntNpackCvfAyEg5AAnEMicytkLxzfcG1XjM5PhGa55PHNj8U1KK6uZtIdFxREZDMpPFky4sNYALHnuWiKeSPbn&_nc_zt=23&_nc_ht=scontent.fgru6-1.fna&_nc_gid=FT2-LQguk45pgM5ovCRsjQ&oh=00_AfMgbtf3lYHF9MezkO6L6thCL0X5HvCvAgG5J1inQoIcuQ&oe=6864956E', 
      likes: 643, 
      comments: 27 
    },
    { 
      postUrl: 'https://www.instagram.com/p/DFD9QENxmKt/?img_index=1', 
      imageUrl: 'https://scontent.fgru6-1.fna.fbcdn.net/v/t51.75761-15/474381837_18481757239046272_1563610169722500858_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGyXocEVFZ-7siiZohisAGFjd1qCvQaVtWN3WoK9BpW1SH6-aQNfVP1YzoPpY_J4K4J2nZA4Tal6weSP5VO1q02&_nc_ohc=fH3nnm0zY3IQ7kNvwHaVCLx&_nc_oc=AdkQxmGP0K69Uc4zUWERETcT3EV0tcnwobJWQzK2R87XUYGbc7RvCl7U_gKcjwu10atNM8rfmvCc-m-skDXn7YBW&_nc_zt=23&_nc_ht=scontent.fgru6-1.fna&_nc_gid=RqfS9u9gaTWJVbglLNn0pA&oh=00_AfOOmCHNU-VEbAigVPQjycMZjoBH3Q3TAwKGCmDhMId4Xw&oe=6864B516', 
      likes: 318, 
      comments: 12 
    },
   {postUrl: 'https://www.instagram.com/p/DJxRgB0OC9k/?img_index=1', 
      imageUrl: 'https://scontent.fgru6-1.fna.fbcdn.net/v/t51.75761-15/485502057_18493237822046272_6763962159324511216_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=COTNCeMMg3wQ7kNvwFfuxFf&_nc_oc=Adl_LuI2XWZ64BzRmZ_oCwDiOJB-1fU7QHur-XooKfNtCcncaqGpbJ5Hl0nExzTkWDzTz--DgAtZNwVIa_GfDz_r&_nc_zt=23&_nc_ht=scontent.fgru6-1.fna&_nc_gid=y1JnrJXM_lqY1pOyAjCrmw&oh=00_AfPqo5DLOswG-FTAMPpIc8vB07VXyupUbDfOC9pOIV3xpA&oe=6864AB16', 
      likes: 398, 
      comments:28
    },
    { 
      postUrl: 'https://www.instagram.com/p/DBMMX6rOJk1/?img_index=1', 
      imageUrl: 'https://scontent.fgru6-1.fna.fbcdn.net/v/t51.75761-15/463222535_18463186783046272_944833993196882644_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeETPLA3sUkE2ocPm5LN-RQx8wdgDow0nELzB2AOjDScQt4kOPVLe00kyx012aPvsIhxJ9gfGLLujToe77G3HIcu&_nc_ohc=HSOGy5bc7OMQ7kNvwGZguPE&_nc_oc=AdntNpackCvfAyEg5AAnEMicytkLxzfcG1XjM5PhGa55PHNj8U1KK6uZtIdFxREZDMpPFky4sNYALHnuWiKeSPbn&_nc_zt=23&_nc_ht=scontent.fgru6-1.fna&_nc_gid=FT2-LQguk45pgM5ovCRsjQ&oh=00_AfMgbtf3lYHF9MezkO6L6thCL0X5HvCvAgG5J1inQoIcuQ&oe=6864956E', 
      likes: 643, 
      comments: 27 
    },
    { 
      postUrl: 'https://www.instagram.com/p/DFD9QENxmKt/?img_index=1', 
      imageUrl: 'https://scontent.fgru6-1.fna.fbcdn.net/v/t51.75761-15/474381837_18481757239046272_1563610169722500858_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGyXocEVFZ-7siiZohisAGFjd1qCvQaVtWN3WoK9BpW1SH6-aQNfVP1YzoPpY_J4K4J2nZA4Tal6weSP5VO1q02&_nc_ohc=fH3nnm0zY3IQ7kNvwHaVCLx&_nc_oc=AdkQxmGP0K69Uc4zUWERETcT3EV0tcnwobJWQzK2R87XUYGbc7RvCl7U_gKcjwu10atNM8rfmvCc-m-skDXn7YBW&_nc_zt=23&_nc_ht=scontent.fgru6-1.fna&_nc_gid=RqfS9u9gaTWJVbglLNn0pA&oh=00_AfOOmCHNU-VEbAigVPQjycMZjoBH3Q3TAwKGCmDhMId4Xw&oe=6864B516', 
      likes: 318, 
      comments: 12 
    },
    {postUrl: 'https://www.instagram.com/p/DJxRgB0OC9k/?img_index=1', 
      imageUrl: 'https://scontent.fgru6-1.fna.fbcdn.net/v/t51.75761-15/485502057_18493237822046272_6763962159324511216_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=COTNCeMMg3wQ7kNvwFfuxFf&_nc_oc=Adl_LuI2XWZ64BzRmZ_oCwDiOJB-1fU7QHur-XooKfNtCcncaqGpbJ5Hl0nExzTkWDzTz--DgAtZNwVIa_GfDz_r&_nc_zt=23&_nc_ht=scontent.fgru6-1.fna&_nc_gid=y1JnrJXM_lqY1pOyAjCrmw&oh=00_AfPqo5DLOswG-FTAMPpIc8vB07VXyupUbDfOC9pOIV3xpA&oe=6864AB16', 
      likes: 398, 
      comments:28
    },
    { 
      postUrl: 'https://www.instagram.com/p/DBMMX6rOJk1/?img_index=1', 
      imageUrl: 'https://scontent.fgru6-1.fna.fbcdn.net/v/t51.75761-15/463222535_18463186783046272_944833993196882644_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeETPLA3sUkE2ocPm5LN-RQx8wdgDow0nELzB2AOjDScQt4kOPVLe00kyx012aPvsIhxJ9gfGLLujToe77G3HIcu&_nc_ohc=HSOGy5bc7OMQ7kNvwGZguPE&_nc_oc=AdntNpackCvfAyEg5AAnEMicytkLxzfcG1XjM5PhGa55PHNj8U1KK6uZtIdFxREZDMpPFky4sNYALHnuWiKeSPbn&_nc_zt=23&_nc_ht=scontent.fgru6-1.fna&_nc_gid=FT2-LQguk45pgM5ovCRsjQ&oh=00_AfMgbtf3lYHF9MezkO6L6thCL0X5HvCvAgG5J1inQoIcuQ&oe=6864956E', 
      likes: 643, 
      comments: 27 
    },
    { 
      postUrl: 'https://www.instagram.com/p/DFD9QENxmKt/?img_index=1', 
      imageUrl: 'https://scontent.fgru6-1.fna.fbcdn.net/v/t51.75761-15/474381837_18481757239046272_1563610169722500858_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGyXocEVFZ-7siiZohisAGFjd1qCvQaVtWN3WoK9BpW1SH6-aQNfVP1YzoPpY_J4K4J2nZA4Tal6weSP5VO1q02&_nc_ohc=fH3nnm0zY3IQ7kNvwHaVCLx&_nc_oc=AdkQxmGP0K69Uc4zUWERETcT3EV0tcnwobJWQzK2R87XUYGbc7RvCl7U_gKcjwu10atNM8rfmvCc-m-skDXn7YBW&_nc_zt=23&_nc_ht=scontent.fgru6-1.fna&_nc_gid=RqfS9u9gaTWJVbglLNn0pA&oh=00_AfOOmCHNU-VEbAigVPQjycMZjoBH3Q3TAwKGCmDhMId4Xw&oe=6864B516', 
      likes: 318, 
      comments: 12 
    },
   {postUrl: 'https://www.instagram.com/p/DJxRgB0OC9k/?img_index=1', 
      imageUrl: 'https://scontent.fgru6-1.fna.fbcdn.net/v/t51.75761-15/485502057_18493237822046272_6763962159324511216_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=COTNCeMMg3wQ7kNvwFfuxFf&_nc_oc=Adl_LuI2XWZ64BzRmZ_oCwDiOJB-1fU7QHur-XooKfNtCcncaqGpbJ5Hl0nExzTkWDzTz--DgAtZNwVIa_GfDz_r&_nc_zt=23&_nc_ht=scontent.fgru6-1.fna&_nc_gid=y1JnrJXM_lqY1pOyAjCrmw&oh=00_AfPqo5DLOswG-FTAMPpIc8vB07VXyupUbDfOC9pOIV3xpA&oe=6864AB16', 
      likes: 398, 
      comments:28
    },
    { 
      postUrl: 'https://www.instagram.com/p/DBMMX6rOJk1/?img_index=1', 
      imageUrl: 'https://scontent.fgru6-1.fna.fbcdn.net/v/t51.75761-15/463222535_18463186783046272_944833993196882644_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeETPLA3sUkE2ocPm5LN-RQx8wdgDow0nELzB2AOjDScQt4kOPVLe00kyx012aPvsIhxJ9gfGLLujToe77G3HIcu&_nc_ohc=HSOGy5bc7OMQ7kNvwGZguPE&_nc_oc=AdntNpackCvfAyEg5AAnEMicytkLxzfcG1XjM5PhGa55PHNj8U1KK6uZtIdFxREZDMpPFky4sNYALHnuWiKeSPbn&_nc_zt=23&_nc_ht=scontent.fgru6-1.fna&_nc_gid=FT2-LQguk45pgM5ovCRsjQ&oh=00_AfMgbtf3lYHF9MezkO6L6thCL0X5HvCvAgG5J1inQoIcuQ&oe=6864956E', 
      likes: 643, 
      comments: 27 
    },
    { 
      postUrl: 'https://www.instagram.com/p/DFD9QENxmKt/?img_index=1', 
      imageUrl: 'https://scontent.fgru6-1.fna.fbcdn.net/v/t51.75761-15/474381837_18481757239046272_1563610169722500858_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGyXocEVFZ-7siiZohisAGFjd1qCvQaVtWN3WoK9BpW1SH6-aQNfVP1YzoPpY_J4K4J2nZA4Tal6weSP5VO1q02&_nc_ohc=fH3nnm0zY3IQ7kNvwHaVCLx&_nc_oc=AdkQxmGP0K69Uc4zUWERETcT3EV0tcnwobJWQzK2R87XUYGbc7RvCl7U_gKcjwu10atNM8rfmvCc-m-skDXn7YBW&_nc_zt=23&_nc_ht=scontent.fgru6-1.fna&_nc_gid=RqfS9u9gaTWJVbglLNn0pA&oh=00_AfOOmCHNU-VEbAigVPQjycMZjoBH3Q3TAwKGCmDhMId4Xw&oe=6864B516', 
      likes: 318, 
      comments: 12 
    },
  ];

  // 3. ADIÇÃO DAS NOVAS PROPRIEDADES PARA O YOUTUBE
  youtubeChannelName: string = 'Elisa Seidel';
  youtubeChannelUrl: string = 'https://www.youtube.com/@elisaseidel';
  youtubeVideos: YouTubeVideo[] = [
    { videoId: '3xDXBVN7e6w', title: 'RETROSPECTIVA 2024' },
    { videoId: '84XfXdlMddg', title: 'QUEDA AO VIVO - MELHORES MOMENTOS DAS LIVES' },
    { videoId: 'XosZw0zcGaM', title: 'NOVA ALUNA DO WAVE. ft FKS e oldschoolfps' },
    { videoId: 'JFPpUNzZzWs', title: 'AMASSANDO EM FORTUNES KEEP' },
    { videoId: '1VU200DylQE', title: 'O DIA QUE TONYBOY INVADIU MINHA LIVE' },

    { videoId: '0oSpHxVs5PQ', title: 'O IMPOSSÍVEL ACONTECEU!! / WARZONE' },
    { videoId: 'mSkkXbAFCjg', title: 'VOLTEI! MELHORES MOMENTOS DA LIVE' },
    { videoId: '9aVqROnHhv4', title: 'ELISAGAMER RELEMBRANDO CROSSFIRE' },
    { videoId: 'o2i8D1VyKu4', title: 'DICÇÃO DE MILHÕES! MELHORES MOMENTOS DAS LIVES' },
    { videoId: '_BbgdO5b1WE', title: 'MATEI A SAUDADE DO CROSSFIRE + MELHORES MOMENTOS' },
  ];

}