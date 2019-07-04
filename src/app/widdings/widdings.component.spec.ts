import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WiddingsComponent } from './widdings.component';

describe('WiddingsComponent', () => {
  let component: WiddingsComponent;
  let fixture: ComponentFixture<WiddingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WiddingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WiddingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
