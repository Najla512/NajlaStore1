import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProudecListComponent } from './proudec-list.component';

describe('ProudecListComponent', () => {
  let component: ProudecListComponent;
  let fixture: ComponentFixture<ProudecListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProudecListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProudecListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
