import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClarityFundsWidgetComponent } from './clarity-funds-widget.component';

describe('ClarityFundsWidgetComponent', () => {
  let component: ClarityFundsWidgetComponent;
  let fixture: ComponentFixture<ClarityFundsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClarityFundsWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClarityFundsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('The token or domain are not set', ()=> {
    it('should show the help message', () => {
      const helpMsgElem = fixture.nativeElement.querySelector('h3');
      expect(helpMsgElem.innerHTML).toMatch('Please fill in the widget domain');
    });
  });
});
