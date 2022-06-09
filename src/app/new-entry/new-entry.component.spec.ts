import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntryService } from '../entry.service';
import { NewEntryComponent } from './new-entry.component';
import { Router } from '@angular/router';

describe('NewEntryComponent', () => {
  let component: NewEntryComponent;
  let fixture: ComponentFixture<NewEntryComponent>;
 
 let userServiceSpy = jasmine.createSpyObj('EntryService', ['onSubmit']);
 userServiceSpy.onSubmit.and.returnValue('Entry was created!');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEntryComponent ],
      providers: [{provide:EntryService, useValue: userServiceSpy}, {provide:Router}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create New Entry Component', () => {
    expect(component).toBeTruthy();
  });

  it('Should contain control description', () => {
    expect(component.entryForm.contains('description')).toBeTruthy();
  });

  it('control should be required', () => {
    let control = component.entryForm.get('description');

    control?.setValue('');

    expect(control?.valid).toBeFalsy();
  });

  it('Create New button should be disabled', () => {
    const newEntryElements: HTMLElement = fixture.nativeElement;
    const createButton = newEntryElements.querySelector('button')!;
    expect(createButton.disabled).toBeTruthy();
  });
});

