import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClarityOrganizationWidgetComponent } from './clarity-organization-widget.component';

describe('ClarityOrganizationWidgetComponent', () => {
  let component: ClarityOrganizationWidgetComponent;
  let fixture: ComponentFixture<ClarityOrganizationWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClarityOrganizationWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClarityOrganizationWidgetComponent);
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
  });
});
