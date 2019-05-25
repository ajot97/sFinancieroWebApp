import { Component, OnInit } from '@angular/core';
import { MatTooltip, MatSnackBar } from '@angular/material';
import { AuthService } from '../auth.service';
import {NgForm} from '@angular/forms';
import {User } from '../../../Models/User';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email = '';
  password = '';
  confirmPassword = '';
  roles: any[];
user:User;

  constructor(private authService: AuthService, private SnackBar: MatSnackBar) { }

  ngOnInit() {
this.resetForm();

    this.authService.getAllRoles().subscribe(
      (data:any[]) => {
        data.forEach(obj=>{obj.selected=false});
        this.roles = data;
        
      }
    )
  }
resetForm(form?: NgForm){
if(form!=null){
  form.reset();
}else{
  this.user={
    UserName: '',
    Password: '',
    Email: '',
    FirstName: '',
    LastName: '',
    Roles:[]
    }
    if(this.roles)
    {
      this.roles.map(x=>x.selected=false);
    }
}
}
updateSelectedRoles(index){
  this.roles[index].selected = !this.roles[index].selected;
}
  signUp() {
    var x= this.roles.filter(x=>x.selected).map(y=>y.Name);
    this.authService.registerUser(this.user,x).then(val => {
      console.log(val);
      this.resetForm();
      this.SnackBar.open('se registro correctamente', 'ok', {duration: 3000});
    }).catch(e=>{
      this.SnackBar.open(e['error'].ExceptionMessage,':/',{duration: 1000});
    });
    
  }


  OnSubmit(form: NgForm){
   
  }
}
