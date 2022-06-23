import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntryService } from '../entry.service';
import { convertToParamMap, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { DeleteEntryComponent } from './delete-entry.component';

describe('DeleteEntryComponent', () => {
  let component: DeleteEntryComponent;
  let fixture: ComponentFixture<DeleteEntryComponent>;
  let routerSpy

 let userServiceSpy = jasmine.createSpyObj('EntryService', ['createEntry']);


  beforeEach(async () => {
    routerSpy = {
      snapshot: {
        paramMap: convertToParamMap({
          id:'1'
        })
      }
    }
    await TestBed.configureTestingModule({
      declarations: [ DeleteEntryComponent ],
      providers: [{provide:EntryService},{provide:Router, useValue:routerSpy},{provide:ActivatedRoute, useValue: routerSpy}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create DeleteEntryComponent', () => {
    expect(component).toBeTruthy();
  });
});
