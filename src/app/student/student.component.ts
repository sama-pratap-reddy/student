import { Component ,ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  displayedColumns: string[] = ['id', 'name', 'gender', 'phone','batch','address','companyname','package','actions' ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}
// public Student:any=[];
constructor(private _StudentService: StudentService) {
 this._StudentService.getAllStudents().subscribe(
    (data: any) =>{
      //  this.Student=data;
    this.dataSource=new MatTableDataSource(data);
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;
 },
(err:any)=>{
  alert("internal server error");
}
)
};
delete(id:string){
  this._StudentService.deleteAllStudents(id).subscribe(
  (data:any)=>{
    alert("deleted successfully");
    location.reload();
  },
  (err:any)=>{
    alert("internal serever error");
  }
  )
  };
  edit()
{
  console.log(this.dataSource);
  this._StudentService.createAllStudent(this.dataSource).subscribe(
    (data:any)=>{
      alert("user created sucessfully");
    },
    (err:any)=>{
      alert("internal server error");
    },

  )
  }

}