import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/Models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 readonly apiUrl = environment.WebApiUrl;
  constructor(private http: HttpClient,private router:Router) { }

signUp(email: string, password: string, confirmPassword: string ) {
  return this.http.post(this.apiUrl + '/api/Account/Register', {
    email,
    password,
    confirmPassword
  });
}
registerUser(user: User,roles :string[]) {
  const body={
    UserName:user.UserName,
    Email:user.Email,
    Password:user.Password,
    FirstName:user.FirstName,
    LastName:user.LastName,
    Roles:roles
  }
  var reqHeader= new HttpHeaders({'No-Auth':'True'})
  return this.http.post(this.apiUrl + '/api/Account/Register',body,{headers:reqHeader} ).toPromise();
}
signIn(username: string, password: string) {
// tslint:disable-next-line: max-line-length
const data = 'username=' + username + '&password=' + password + '&grant_type=password';
const reqHeader = new HttpHeaders({'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True'});
return this.http.post(this.apiUrl + '/Token' , data , {headers: reqHeader} ).toPromise();
}
logOut(){
  sessionStorage.removeItem("accessToken");
  sessionStorage.removeItem("roles");
  sessionStorage.removeItem("username");
  this.router.navigateByUrl("/Auth/SignIn");
}
getUserClaims() {
  return this.http.get(this.apiUrl + '/api/GetUserClaims');
}
getAllRoles() {
  const reqHeader = new HttpHeaders({'No-Auth': 'True'});
  return this.http.get(this.apiUrl + '/api/GetAllRoles', {headers: reqHeader}).toPromise();
}
getRolesByUser(username: string){
  const reqHeader = new HttpHeaders({'Authorization': 'Bearer ' + sessionStorage.getItem("accessToken")});
  return this.http.post(this.apiUrl + '/api/Account/GetRolesByUser', username , {headers: reqHeader}).toPromise();

}
isLogged(): boolean {

  if ( sessionStorage.getItem("accessToken") != null){
    console.log("isLogged");
  return true;
  }
}
hasAccess(){
  if(sessionStorage.getItem("Roles")!=null){
    
  }
}

}
