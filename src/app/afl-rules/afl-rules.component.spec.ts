import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AflRulesComponent } from './afl-rules.component';

describe('AflRulesComponent', () => {
  let component: AflRulesComponent;
  let fixture: ComponentFixture<AflRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AflRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AflRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
