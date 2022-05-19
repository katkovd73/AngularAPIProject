import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Type } from '../interfaces/Type';
import { EntryService } from '../entry.service';
import { Data } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-entry',
  templateUrl: './update-entry.component.html',
  styleUrls: ['./update-entry.component.css']
})
export class UpdateEntryComponent implements OnInit {

  form:FormGroup;
  id: number;  
  
  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<UpdateEntryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service:EntryService,
    private router:Router) { 

      this.id = data.Id;

      this.form = fb.group({
        description:[data.Description, Validators.required],
        isExpense:[data.IsEspense, Validators.required],
        value:[data.Value, Validators.required] // , Validators.pattern('\\d+\\.?\\d*')
      });
      
    }

    types: Type[] = [
      {value:true, display:'Expense'},
      {value:false, display:'Income'}
    ]  


  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.form.value.id = this.id;
    this.service.updateEntry(this.id, this.form.value).subscribe((data)=>{
      console.log('Data: ',data);
      this.dialogRef.close();
      this.router.navigate(['/']);
      
    })
  }

}
