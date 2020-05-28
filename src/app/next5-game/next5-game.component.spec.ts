import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Next5GameComponent } from './next5-game.component';

describe('Next5GameComponent', () => {
  let component: Next5GameComponent;
  let fixture: ComponentFixture<Next5GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Next5GameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Next5GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
