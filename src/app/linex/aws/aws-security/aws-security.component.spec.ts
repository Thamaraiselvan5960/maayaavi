import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsSecurityComponent } from './aws-security.component';

describe('AwsSecurityComponent', () => {
  let component: AwsSecurityComponent;
  let fixture: ComponentFixture<AwsSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsSecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
