import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsInputComponent } from './operations-input.component';

describe('OperationsInputComponent', () => {
  let component: OperationsInputComponent;
  let fixture: ComponentFixture<OperationsInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationsInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
