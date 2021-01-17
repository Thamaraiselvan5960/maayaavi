import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwssshLoginComponent } from './awsssh-login.component';

describe('AwssshLoginComponent', () => {
  let component: AwssshLoginComponent;
  let fixture: ComponentFixture<AwssshLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwssshLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwssshLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
