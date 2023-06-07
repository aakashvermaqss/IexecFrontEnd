import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastvisitComponent } from './lastvisit.component';

describe('LastvisitComponent', () => {
  let component: LastvisitComponent;
  let fixture: ComponentFixture<LastvisitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastvisitComponent]
    });
    fixture = TestBed.createComponent(LastvisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
