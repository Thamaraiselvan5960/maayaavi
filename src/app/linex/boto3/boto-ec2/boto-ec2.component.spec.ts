import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoEc2Component } from './boto-ec2.component';

describe('BotoEc2Component', () => {
  let component: BotoEc2Component;
  let fixture: ComponentFixture<BotoEc2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotoEc2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotoEc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
