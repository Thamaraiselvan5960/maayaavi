import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDatatypesComponent } from './p-datatypes.component';

describe('PDatatypesComponent', () => {
  let component: PDatatypesComponent;
  let fixture: ComponentFixture<PDatatypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PDatatypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PDatatypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
