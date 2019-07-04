import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThaiWiddingsComponent } from './thai-widdings.component';

describe('ThaiWiddingsComponent', () => {
  let component: ThaiWiddingsComponent;
  let fixture: ComponentFixture<ThaiWiddingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThaiWiddingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThaiWiddingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
