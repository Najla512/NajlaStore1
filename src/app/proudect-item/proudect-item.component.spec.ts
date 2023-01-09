import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProudectItemComponent } from './proudect-item.component';

describe('ProudectItemComponent', () => {
  let component: ProudectItemComponent;
  let fixture: ComponentFixture<ProudectItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProudectItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProudectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
