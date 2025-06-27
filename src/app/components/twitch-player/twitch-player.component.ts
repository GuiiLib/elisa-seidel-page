import { Component, Input, OnInit, OnChanges, SimpleChanges, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare const Twitch: any;

@Component({
  selector: 'app-twitch-player',
  standalone: true,
  imports: [], // CommonModule não é necessário aqui se você não usa *ngIf, etc.
  templateUrl: './twitch-player.component.html',
  styleUrls: ['./twitch-player.component.css']
})
export class TwitchPlayer implements OnInit, OnChanges {
  @Input() channel: string = 'nome canal';
  @Input() width: string = '100%';
  @Input() height: string = '480';

  private player: any;

  // 1. Injeta o PLATFORM_ID para saber onde o código está rodando
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // 2. SÓ executa o código se estivermos no NAVEGADOR
    if (isPlatformBrowser(this.platformId)) {
      this.createPlayer();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // 3. Garante que o player exista antes de tentar usá-lo (importante para SSR)
    if (this.player && changes['channel'] && !changes['channel'].isFirstChange()) {
      this.player.setChannel(this.channel);
    }
  }

  private createPlayer(): void {
    const options = {
      width: this.width,
      height: this.height,
      channel: this.channel,
      // 4. Melhoria: Pega o domínio automaticamente
      parent: [window.location.hostname]
    };

    this.player = new Twitch.Embed('twitch-embed', options);

    this.player.addEventListener(Twitch.Player.READY, () => {
      console.log('Player da Twitch está pronto!');
    });
  }
}