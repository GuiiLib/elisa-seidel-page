import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchPlayer } from './twitch-player.component';

describe('TwitchPlayer', () => {
  let component: TwitchPlayer;
  let fixture: ComponentFixture<TwitchPlayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwitchPlayer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwitchPlayer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
