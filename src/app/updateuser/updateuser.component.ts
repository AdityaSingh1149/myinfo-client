import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/User.model';
import { Router ,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  id: number;
user:User;
  constructor(private route: ActivatedRoute,private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.user = new User();

    this.id = this.route.snapshot.params['id'];
    
    this.userService.getUserID(this.id);
      // .subscribe(data => {
      //   console.log(data)
      //   this.user = data;
      // }, error => console.log(error));
  }


  save(){
this.userService.addUser(this.user).subscribe(data=>console.log(data),error=>console.log(error));
    }
    
    onSubmit(){
      this.save();
    }
}
