import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoondetailComponent } from './cartoondetail.component';

describe('CartoondetailComponent', () => {
  let component: CartoondetailComponent;
  let fixture: ComponentFixture<CartoondetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartoondetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartoondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
