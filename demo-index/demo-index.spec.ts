import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoIndex } from './demo-index';

describe('DemoIndex', () => {
  let component: DemoIndex;
  let fixture: ComponentFixture<DemoIndex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoIndex]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoIndex);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
