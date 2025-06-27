import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchChat } from './twitch-chat.component';

describe('TwitchChat', () => {
  let component: TwitchChat;
  let fixture: ComponentFixture<TwitchChat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwitchChat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwitchChat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
