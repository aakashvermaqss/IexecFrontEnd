import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferringdoctorComponent } from './referringdoctor.component';

describe('ReferringdoctorComponent', () => {
  let component: ReferringdoctorComponent;
  let fixture: ComponentFixture<ReferringdoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReferringdoctorComponent]
    });
    fixture = TestBed.createComponent(ReferringdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
