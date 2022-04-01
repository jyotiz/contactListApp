import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';


@Injectable()
export class UserService {

  private usersUrl: string;
  constructor(private http: HttpClient) {
      //Point to your spring boot applictaion started locally
    this.usersUrl = 'http://localhost:8080/getPeopleList';
   }

   public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }

}
