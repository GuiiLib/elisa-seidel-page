import { Component, Input, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare const Twitch: any;

@Component({
  selector: 'app-twitch-chat',
  standalone: true,
  imports: [],
  templateUrl: './twitch-chat.component.html',
  styleUrls: ['./twitch-chat.component.css']
})
export class TwitchChat implements OnInit {
  @Input() channel: string = 'seucanal';
  @Input() darkMode: boolean = true;
  @Input() width: string = '100%';
  @Input() height: string = '500';

  // 1. Injeta o PLATFORM_ID
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // 2. SÓ executa o código se estivermos no NAVEGADOR
    if (isPlatformBrowser(this.platformId)) {
      this.createChat();
    }
  }

  private createChat(): void {
    const options = {
      width: this.width,
      height: this.height,
      channel: this.channel,
      theme: this.darkMode ? 'dark' : 'light',
      // 3. Melhoria: Pega o domínio automaticamente
      parent: [window.location.hostname]
    };

    new Twitch.Embed('twitch-chat-embed', options);
  }
}