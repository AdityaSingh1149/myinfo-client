import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/User.model';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  user:User[];

  constructor(private userService:UserService,private router:Router,private toastr: ToastrService) { }

  ngOnInit() {
    this.getUser();
    // this.userService.refreshList();
  }
  getUser(){
    return this.userService.Viewuser().subscribe(data=>this.user=data);
  }
  
  // deleteUser(id:number){
  //   this.getUser();
  //   return this.userService.deleteUser(id).subscribe(
  //     data=>{this.user=this.user.filter(u=>  u)});
      
  //     //console.log(data),error=>console.log(error));
  // }

  deleteUser(id:number){
    if(confirm('Are you sure to delete this record?')){
      this.userService.deleteUser(id).subscribe(res=> {
        this.userService.Viewuser();
        this.toastr.warning('Deleted successfully', 'EMP. Register');
      });
    }
   }

  updateUser(user:User){
    this.userService.setter(user);
    this.router.navigate(['Updateuser']);

      // return this.userService.getUserID(id).subscribe(
      //   data=>{this.user=this.user.filter(u=>  u)});
  }
}
