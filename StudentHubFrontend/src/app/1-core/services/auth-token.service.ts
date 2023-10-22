import {Injectable} from '@angular/core';

export const TOKEN_KEY = 'auth-token';
export const ID_KEY = 'student-id'

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {
  constructor() {
  }

  signOut(): void {
    window.localStorage.clear();
  }

  public getId(): number | null {
    const value = window.localStorage.getItem(ID_KEY)
    return value ? parseInt(value) : null;
  }

  public saveId(id: number): void {
    window.localStorage.removeItem(ID_KEY);
    window.localStorage.setItem(ID_KEY, id.toString());
  }

  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  }
}
