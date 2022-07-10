import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditJobOfferComponent } from './add-edit-job-offer.component';

describe('AddEditJobOfferComponent', () => {
  let component: AddEditJobOfferComponent;
  let fixture: ComponentFixture<AddEditJobOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditJobOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditJobOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
