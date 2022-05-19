import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;
  
  constructor(private fb:FormBuilder) {

    this.registerForm = fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required],
      confirmPassword: ['',Validators.required],
    })
  }
    //{validator:matchingFields('password', 'confirmPassword')})
   //}
  
  onSubmit(){
    console.log(this.registerForm.value);
  }
}



// function matchingFields(field1:any, field2:any){
//   return form => {
//     if(form.controls[field1].value !== form.controls[field2].value)
//       return {matchingFields:true}      
//   }
//}
