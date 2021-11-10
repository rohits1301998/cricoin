import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingColumnComponent } from './listing-column.component';

describe('ListingColumnComponent', () => {
  let component: ListingColumnComponent;
  let fixture: ComponentFixture<ListingColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
