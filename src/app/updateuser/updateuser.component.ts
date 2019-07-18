import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/User.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
user: User=new User();
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.userService.getter();
  }


  save(){
this.userService.addUser(this.user).subscribe(data=>console.log(data),error=>console.log(error));
    }
    
    onSubmit(){
      this.save();
    }
}
