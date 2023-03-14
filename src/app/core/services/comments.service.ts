import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {HttpParams} from "@angular/common/http";
import {ApiError} from "../types/api-error";
import {Article} from "../../../data/models/article";
import {ApiResult} from "../types/api-result";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private readonly base: string = "/comment/";

  constructor(private apiService: ApiService) {
  }

  getComments(onError: ApiError, articleId: number = 0, offset: number = 0, size: number = 100): Observable<ApiResult<Array<Article.Comment>>> {
    return this.apiService.get(`${this.base}byArticleId?articleId=${articleId}&offset=${offset}&size=${size}`, new HttpParams(), onError);
  }

  sendComment(onError: ApiError, text: string, articleId: number = 0): Observable<void> {
    return this.apiService.post(`${this.base}create`, {articleId: articleId, text: text}, onError);
  }
}