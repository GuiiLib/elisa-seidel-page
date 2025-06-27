import { Component, OnInit } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendarDays, faVideo, faPowerOff, faStar } from '@fortawesome/free-solid-svg-icons';

// Define a estrutura de um evento
export interface CalendarEvent {
  date: Date;
  title: string;
  type: 'live' | 'offline' | 'event'; // Tipos de evento para estilos diferentes
  description?: string;
}

@Component({
  selector: 'app-calendar-agenda',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './calendar-agenda.component.html',
  styleUrls: ['./calendar-agenda.component.css']
})
export class CalendarAgendaComponent implements OnInit {
  faCalendarDays = faCalendarDays;
  faVideo = faVideo;
  faPowerOff = faPowerOff;
  faStar = faStar;

  allEvents: CalendarEvent[] = [];
  groupedEvents: { [key: string]: CalendarEvent[] } = {};

  ngOnInit(): void {
    const today = new Date();

    // ---- A CORREÇÃO ESTÁ AQUI ----
    // Tipamos explicitamente o array de dados como 'CalendarEvent[]'
    const eventData: CalendarEvent[] = [
      { date: this.getDate(today, 0), type: 'live', title: 'Live de Reações e Bate-papo', description: 'Vamos ver os vídeos da semana! - 20h' },
      { date: this.getDate(today, 1), type: 'offline', title: 'Dia de Descanso / Offline' },
      { date: this.getDate(today, 2), type: 'live', title: 'Gameplay do Jogo Novo!', description: 'Zerando o lançamento do mês - 19h' },
      { date: this.getDate(today, 3), type: 'live', title: 'Live com Convidados Especiais (Comedy)', description: 'Gameplay em dupla com papangu - 21h' },
      { date: this.getDate(today, 4), type: 'offline', title: 'Dia de Descanso / Offline' },
      { date: this.getDate(today, 5), type: 'event', title: 'EVENTO: Sábado Solidário 12h!', description: 'Live beneficente com metas e surpresas.' },
      { date: this.getDate(today, 6), type: 'live', title: 'Domingo de Jogos com a Galera', description: 'Jogando os jogos que vocês escolherem no Discord - 18h' },
    ];
    
    // Atribuímos os dados já tipados e ordenados
    this.allEvents = eventData.sort((a, b) => a.date.getTime() - b.date.getTime());
    // ---- FIM DA CORREÇÃO ----

    this.groupEventsByDay();
  }

  private getDate(startDate: Date, daysToAdd: number): Date {
    const newDate = new Date(startDate);
    newDate.setDate(startDate.getDate() + daysToAdd);
    return newDate;
  }

  private groupEventsByDay(): void {
    this.allEvents.forEach(event => {
      const eventDateKey = formatDate(event.date, 'yyyy-MM-dd', 'en-US');
      if (!this.groupedEvents[eventDateKey]) {
        this.groupedEvents[eventDateKey] = [];
      }
      this.groupedEvents[eventDateKey].push(event);
    });
  }
}