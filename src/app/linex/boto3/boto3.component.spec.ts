import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Boto3Component } from './boto3.component';

describe('Boto3Component', () => {
  let component: Boto3Component;
  let fixture: ComponentFixture<Boto3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Boto3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Boto3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
