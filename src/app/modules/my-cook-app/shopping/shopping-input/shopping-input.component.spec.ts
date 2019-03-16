import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingInputComponent } from './shopping-input.component';

describe('ShoppingInputComponent', () => {
  let component: ShoppingInputComponent;
  let fixture: ComponentFixture<ShoppingInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
