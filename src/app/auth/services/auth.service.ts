import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../core/services/storage.service';
export const STORAGE_KEY = 'WT';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private storageService: StorageService, private router: Router) {}

  // TODO: Find a way to mantain user's state through storage.
  logout() {
    this.storageService.saveStateAndCleanResorces();
  }

  getToken(parse = false) {
    return this.storageService.getItemStorage(STORAGE_KEY, parse, true);
  }

  setToken(token: string) {
    this.storageService.setItemStorage(token, STORAGE_KEY, true);
  }

  authenticate(username: string, password: string) {
    this.setToken(`{username: omarpf07}`);
    this.router.navigate(['/home']);
  }

  register(username: string, password: string) {
    this.authenticate(username, password);
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }
}
