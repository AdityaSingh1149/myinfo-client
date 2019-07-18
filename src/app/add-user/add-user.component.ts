import { Component, OnInit } from '@angular/core';
import { User } from '../model/User.model';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
user:User=new User();
submitted = false;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
  }
newUser():void{
  this.submitted = false;
  this.user=new User();
}

save(){
this.userService.addUser(this.user).subscribe(data=>console.log(data),error=>console.log(error));
}

onSubmit(){
  this.submitted = true;
  this.save();
}
ViewUser(){
  this.router.navigate(['Viewuser']);
  
}
}
