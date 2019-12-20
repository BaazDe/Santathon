import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {User} from "../user";
import {NewUser} from "./newuser";
import {HttpHeaders} from "@angular/common/http";
import {MessageService} from "./message.service";




@Injectable({
  providedIn: "root"
})
export class UserService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(
    private http: HttpClient) { }

  private apiUrl = "http://localhost:8000/api/users.json";


  /** POST: add a new user to the server */
  addUser (user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user, this.httpOptions);
  }

}
