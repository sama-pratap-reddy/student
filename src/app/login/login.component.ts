import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.email]);
show: boolean= false;
submit(){
console.log("user name is " + this.emailFormControl)
this.clear();
}
clear(){
this.emailFormControl; 
this.passwordFormControl;
this.show = true;
}
  
}
