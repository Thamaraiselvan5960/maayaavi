import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronjsComponent } from './electronjs.component';

describe('ElectronjsComponent', () => {
  let component: ElectronjsComponent;
  let fixture: ComponentFixture<ElectronjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
