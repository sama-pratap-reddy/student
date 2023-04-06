import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  public create :FormGroup =new FormGroup(
    {
  firstname : new FormControl(),
  lastname:new FormControl(),
  fathername:new FormControl(),
  mothername:new FormControl(),
  gender : new FormControl(),
  phone : new FormControl(),
  email: new FormControl(),
  address:new FormGroup(
{
adress:new FormControl(),
addres:new FormControl(),
city: new FormControl(),
state:new FormControl(),
pincode:new FormControl(),
})

}
)
constructor(private _StudentService:StudentService){}
Submit()
{
  console.log(this.create);
  this._StudentService.createAllStudent(this.create.value).subscribe(
    (data:any)=>{
      alert("user created sucessfully");
    },
    (err:any)=>{
      alert("internal server error");
    },

  )
  }

}

