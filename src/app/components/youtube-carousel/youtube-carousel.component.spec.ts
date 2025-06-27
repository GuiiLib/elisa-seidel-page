import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeCarouselComponent } from './youtube-carousel.component';

describe('YoutubeCarouselComponent', () => {
  let component: YoutubeCarouselComponent;
  let fixture: ComponentFixture<YoutubeCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YoutubeCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubeCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
