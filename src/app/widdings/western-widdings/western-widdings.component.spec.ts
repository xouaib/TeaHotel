import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WesternWiddingsComponent } from './western-widdings.component';

describe('WesternWiddingsComponent', () => {
  let component: WesternWiddingsComponent;
  let fixture: ComponentFixture<WesternWiddingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WesternWiddingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WesternWiddingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
