import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProudectItemDetailsComponent } from './proudect-item-details.component';

describe('ProudectItemDetailsComponent', () => {
  let component: ProudectItemDetailsComponent;
  let fixture: ComponentFixture<ProudectItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProudectItemDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProudectItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
