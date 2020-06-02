import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AflAdminComponent } from './afl-admin.component';

describe('AflAdminComponent', () => {
  let component: AflAdminComponent;
  let fixture: ComponentFixture<AflAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AflAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AflAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
