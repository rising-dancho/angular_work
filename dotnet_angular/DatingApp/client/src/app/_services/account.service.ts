import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../_models/post';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  // private http = inject(HttpClient); // angular ver 14.
  baseUrl = 'https://localhost:5001/api/';
  private currentUserSource = new BehaviorSubject<User | null>(null);
  // the $ is a convention that is used to signify that this is an observable
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) {}

  login(model: any) {
    // post<User> .. hint
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        const user = response;

        if (user) {
          // set key of the local storage item as 'user'
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
        return user;
      }),
    );
  }

  register(model: any) {
    return this.http.post<User>(this.baseUrl + 'account/register', model).pipe(
      map((user) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
        // return user;
      }),
    );
  }

  createPost(post: Post) {
    return this.http.post(
      'https://http-practice-2645f-default-rtdb.firebaseio.com/posts.json',
      post,
    );
  }

  setCurrentUser(user: User) {
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}
