import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinuxcommandsComponent } from './linuxcommands.component';

describe('LinuxcommandsComponent', () => {
  let component: LinuxcommandsComponent;
  let fixture: ComponentFixture<LinuxcommandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinuxcommandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinuxcommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
