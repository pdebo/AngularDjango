import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateCardComponent } from './associate-card.component';

describe('AssociateCardComponent', () => {
  let component: AssociateCardComponent;
  let fixture: ComponentFixture<AssociateCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociateCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
