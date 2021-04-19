import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClarityWidgetComponent } from './clarity-widget.component';

describe('ClarityWidgetComponent', () => {
  let component: ClarityWidgetComponent;
  let fixture: ComponentFixture<ClarityWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClarityWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClarityWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
