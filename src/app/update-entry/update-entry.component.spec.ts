import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntryService } from '../entry.service';
import { Router } from '@angular/router';
import { UpdateEntryComponent } from './update-entry.component';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';


describe('UpdateEntryComponent', () => {
  let component: UpdateEntryComponent;
  let fixture: ComponentFixture<UpdateEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEntryComponent ],
      providers: [{provide:EntryService, useValue: {}},
                  {provide:Router, useValue:{}},
                  {provide:FormBuilder},
                  {provide:MatDialogRef, useValue:{}},
                  {provide:MAT_DIALOG_DATA, useValue:{}},
                  {provide:HttpClient,  useValue:{}}]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
