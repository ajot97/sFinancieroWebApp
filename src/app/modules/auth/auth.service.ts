import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/Models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 readonly apiUrl = environment.WebApiUrl;
  constructor(private http: HttpClient) { }

signUp(email: string, password: string, confirmPassword: string ) {
  return this.http.post(this.apiUrl + '/api/Account/Register', {
    email,
    password,
    confirmPassword
  });
}
registerUser(user: User,roles: string[]) {
  const body={
    UserName:user.UserName,
    Email:user.Email,
    Password:user.Password,
    FirstName:user.FirstName,
    LastName:user.LastName,
    Roles:user.Roles
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
getUserClaims() {
  return this.http.get(this.apiUrl + '/api/GetUserClaims');
}
getAllRoles() {
  const reqHeader = new HttpHeaders({'No-Auth': 'True'});
  return this.http.get(this.apiUrl + '/api/GetAllRoles', {headers: reqHeader});
}

}
