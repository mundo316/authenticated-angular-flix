import { Injectable, ɵSWITCH_COMPILE_NGMODULE__POST_R3__ } from '@angular/core';
import { ApiService } from '../app/api.service';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
token: string;

  constructor(private ApiService, ) { };

  async signUp(ApiService) {
    ApiService.get(this.logIn).toPromise;
  }
  
  async logIn() {
    const data={
      username: "",
      password: ""
    };

  };

  get getToken() {
    return this.token;
  }
}
