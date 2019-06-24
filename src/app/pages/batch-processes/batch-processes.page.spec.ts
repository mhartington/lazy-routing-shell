import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchProcessesPage } from './batch-processes.page';

describe('BatchProcessesPage', () => {
  let component: BatchProcessesPage;
  let fixture: ComponentFixture<BatchProcessesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchProcessesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchProcessesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
