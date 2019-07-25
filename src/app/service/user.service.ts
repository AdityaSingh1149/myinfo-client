import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 getUrl="http://localhost:8181/getUser";
 addUrl="http://localhost:8181/addUser";
 deleteUrl="http://localhost:8181/deleteUser";
 updateUrl="http://localhost:8181/updateUser";
 getUserIDUrl="http://localhost:8181/getUserID";
 user:User=new User();
  constructor(private http:HttpClient) { }
 
 
  Viewuser(){
    return this.http.get<User[]>(this.getUrl);
  }
  // RELOAD(){
  //   return this.http.get<User[]>(this.getUrl)
  //   .toPromise().then(res => this.user = res as User[]);
  // }
  addUser(user : User){
    console.log(user);
    return this.http.post(this.addUrl,user);
  }
  deleteUser(id: number){
    console.log(id);
    console.log(`${this.deleteUrl}/${id}`);
    return this.http.delete(`${this.deleteUrl}/${id}`,{responseType:'text'});
  }
  updateUser(user: User){
    console.log(user);
    return this.http.put(this.updateUrl,user);
  }

  getUserID(id: number){
    console.log(id);
    console.log(`${this.getUserIDUrl}/${id}`);
    return this.http.get(`${this.getUserIDUrl}/${id}`);
  }
  setter(user:User)
  {
    this.user=user;
  }
  getter()
  {
    return this.user;
  }
}


