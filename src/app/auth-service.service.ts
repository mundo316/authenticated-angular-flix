import { Injectable, ɵSWITCH_COMPILE_NGMODULE__POST_R3__ } from '@angular/core';
import { ApiService } from '../app/api.service';
import { Extractor } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
token: string;
username: string;
password: string;

  constructor(private apiService: ApiService ) { };

  async signUp(username, password) {
    const data={username, password};
    let response = this.apiService.post("auth/signup", data);
    return Response;
  }
  
  async logIn(data) {
    const jsondata = JSON.stringify(data);
    await this.apiService.post("auth/login", jsondata);
    const response = await this.apiService.post("auth/login", jsondata);
    this.token= response.token;
    localStorage.setItem('token', this.token);
    console.log(this.token);
  };

  getToken() {
    return this.token;
  }
}
