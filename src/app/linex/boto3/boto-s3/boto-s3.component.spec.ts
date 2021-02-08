import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoS3Component } from './boto-s3.component';

describe('BotoS3Component', () => {
  let component: BotoS3Component;
  let fixture: ComponentFixture<BotoS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotoS3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotoS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
