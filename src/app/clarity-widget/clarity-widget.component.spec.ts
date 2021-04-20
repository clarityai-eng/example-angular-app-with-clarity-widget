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

  describe('The token or domain are not set', ()=> {
    it('should show the help message', () => {
      const helpMsgElem = fixture.nativeElement.querySelector('h3');
      expect(helpMsgElem.innerHTML).toMatch('Please fill in the widget domain')
    });
  })
});
