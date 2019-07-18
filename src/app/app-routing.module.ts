import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';


const routes: Routes = [
  { path:'Viewuser',component:UserComponent },
  { path: 'Adduser' ,component:AddUserComponent },
  { path:'Updateuser/:id',component:UpdateuserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
