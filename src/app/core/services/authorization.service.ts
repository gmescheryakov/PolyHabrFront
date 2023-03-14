import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {ApiResult} from "../types/api-result";
import {ApiError} from "../types/api-error";
import {Authorization} from "../../../data/models/authorization";
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private readonly base: string = "/api/auth/";

  constructor(private apiService: ApiService) {

  }

  signUp(onError: ApiError, data: Authorization.SignUp): Observable<ApiResult<any>> {
    return this.apiService.post(`${this.base}signup`, data, onError);
  }

  signIn(onError: ApiError, data: Authorization.SignIn): Observable<Authorization.Login> {
    return this.apiService.post(`${this.base}signin`, data, onError);
  }

  checkFreeLogin(onError: ApiError, nickname: string): Observable<ApiResult<any>> {
    let configUrl = "";
    Object.entries({login: nickname}).map(([key, value]) => {
      configUrl += `${key}=${value}&`;
    });
    return this.apiService.get(`${this.base}checkFreeLogin?${configUrl}`, new HttpParams(), onError);
  }

  checkFreeEmail(onError: ApiError, nickname: string): Observable<ApiResult<any>> {
    let configUrl = "";
    Object.entries({email: nickname}).map(([key, value]) => {
      configUrl += `${key}=${value}&`;
    });
    return this.apiService.get(`${this.base}checkFreeEmail?${configUrl}`, new HttpParams(), onError);
  }

  verify(onError: ApiError, token: string): Observable<ApiResult<any>> {
    let configUrl = "";
    Object.entries({code: token}).map(([key, value]) => {
      configUrl += `${key}=${value}&`;
    });
    return this.apiService.get(`${this.base}verify?${configUrl}`, new HttpParams(), onError);
  }

  forgotPassword(onError: ApiError, email: string): Observable<ApiResult<any>> {
    let configUrl = "";
    Object.entries({email: email}).map(([key, value]) => {
      configUrl += `${key}=${value}&`;
    });
    return this.apiService.post(`${this.base}forgotPassword?${configUrl}`, new HttpParams(), onError);
  }

  changePassword(onError: ApiError, token: string): Observable<any> {
    let configUrl = "";
    Object.entries({token: token}).map(([key, value]) => {
      configUrl += `${key}=${value}&`;
    });
    return this.apiService.get(`${this.base}changePassword?${configUrl}`, new HttpParams(), onError);
  }

  savePassword(onError: ApiError, data: Authorization.SavePassword): Observable<any> {
    return this.apiService.put(`${this.base}savePassword`, data, onError);
  }
}
