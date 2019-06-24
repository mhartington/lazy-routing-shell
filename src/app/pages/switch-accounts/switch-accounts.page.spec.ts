import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchAccountsPage } from './switch-accounts.page';

describe('SwitchAccountsPage', () => {
  let component: SwitchAccountsPage;
  let fixture: ComponentFixture<SwitchAccountsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchAccountsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchAccountsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
