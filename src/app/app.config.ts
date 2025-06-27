// Imports existentes
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

// 1. ADICIONAR ESTES DOIS IMPORTS para o idioma
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

// Imports existentes
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

// 2. ADICIONAR ESTA LINHA para registrar o português
registerLocaleData(localePt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),

    // 3. ADICIONAR ESTA LINHA para definir o idioma padrão da aplicação
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
};