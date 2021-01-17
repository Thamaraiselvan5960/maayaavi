import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsintroComponent } from './awsintro.component';

describe('AwsintroComponent', () => {
  let component: AwsintroComponent;
  let fixture: ComponentFixture<AwsintroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsintroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
