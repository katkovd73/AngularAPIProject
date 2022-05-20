import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EntryService } from '../entry.service';
import { Type } from '../interfaces/Type';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent {

  contactMethods = [
    {id:1, methodName: 'Email'},
    {id:2, methodName: 'Mail'},
    {id:3, methodName: 'Phone'}
  ]

  types: Type[] = [
    {value:true, display:'Expense'},
    {value:false, display:'Income'}
  ]

  constructor(private service:EntryService) { }

  entryForm = new FormGroup({
    description: new FormControl('', Validators.required),
    isExpense: new FormControl('', Validators.required),
    value: new FormControl('', [Validators.required, Validators.pattern('\\d+\\.?\\d*')]),
    isSubscribed: new FormControl(),
    contactMethod: new FormControl()
  })

  onSubmit(){
    console.log(this.entryForm.value);
    this.service.createEntry(this.entryForm.value).subscribe((data)=> {
      console.log('Data - ',data);
    })
  }

  // Tool to look at the properties of your FormGroup object
  onChange(f:any) {
    console.log(f);
  }

}
