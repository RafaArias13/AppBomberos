import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncendioComponent } from './incendio.component';

describe('IncendioComponent', () => {
  let component: IncendioComponent;
  let fixture: ComponentFixture<IncendioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncendioComponent]
    });
    fixture = TestBed.createComponent(IncendioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
