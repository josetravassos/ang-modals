import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWithFactoryComponent } from './modal-with-factory.component';

describe('ModalWithFactoryComponent', () => {
  let component: ModalWithFactoryComponent;
  let fixture: ComponentFixture<ModalWithFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalWithFactoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalWithFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
