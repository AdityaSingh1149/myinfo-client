import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/User.model';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  user:User[];

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.getUser();
  }
  getUser(){
    return this.userService.Viewuser().subscribe(data=>this.user=data);
  }
  
  deleteUser(id:number){
    this.getUser();
    return this.userService.deleteUser(id).subscribe(
      data=>{this.user=this.user.filter(u=>  u)});
      
      //console.log(data),error=>console.log(error));
  }
  updateUser(id:number){
    this.router.navigate(['Updateuser',id]);

      // return this.userService.getUserID(id).subscribe(
      //   data=>{this.user=this.user.filter(u=>  u)});
  }
}
