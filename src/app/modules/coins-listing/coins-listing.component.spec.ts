import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinsListingComponent } from './coins-listing.component';

describe('CoinsListingComponent', () => {
  let component: CoinsListingComponent;
  let fixture: ComponentFixture<CoinsListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinsListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
