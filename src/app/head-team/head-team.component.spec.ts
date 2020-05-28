import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadTeamComponent } from './head-team.component';

describe('HeadTeamComponent', () => {
  let component: HeadTeamComponent;
  let fixture: ComponentFixture<HeadTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
