import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturarComponent } from './capturar.component';

describe('CapturarComponent', () => {
  let component: CapturarComponent;
  let fixture: ComponentFixture<CapturarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapturarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapturarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
