import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userInfoKey = '@USER';

  activeUserId?: number = undefined;

  userInfo?: { [index: number]: IUser } = {};

  constructor(private http: HttpClient) {
    const storedInfo = localStorage.getItem(this.userInfoKey);
    if (storedInfo) {
      this.userInfo = JSON.parse(storedInfo);
    }
  }

  get(id: number): Promise<IUser> {
    return new Promise((resolve) => {
      if (this?.userInfo?.[id]) {
        return resolve(this?.userInfo?.[id]);
      }

      this.http.get(`${environment.apiUrl}/api/users/${id}`).subscribe({
        next: (data) => {
          resolve(this.onUserInfo(data));
        },
      });
    });
  }

  private onUserInfo(data: Object) {
    const user: IUser = (data as any).data as any;
    this.userInfo = {
      ...(this.userInfo ?? []),
      [user.id]: user,
    };
    localStorage.setItem(this.userInfoKey, JSON.stringify(this.userInfo));
    return user;
  }
}
