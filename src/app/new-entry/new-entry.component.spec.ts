import { EntryService } from './../entry.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEntryComponent } from './new-entry.component';

describe('NewEntryComponent', () => {
  let component: NewEntryComponent;
  let fixture: ComponentFixture<NewEntryComponent>;
  let service: EntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [NewEntryComponent]});
    TestBed.inject(EntryService);
    // const entryService = TestBed.inject(EntryService);    

    fixture = TestBed.createComponent(NewEntryComponent);
    component = fixture.componentInstance;
  });

  it('should create NewEntryComponent', () => {
    expect(component).toBeDefined();
  });
});
