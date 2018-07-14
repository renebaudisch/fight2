import { Inject, Injectable } from '@angular/core';
import { APP_SERVER_URL } from './toolframe.config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ToolframeService {
  constructor(@Inject(APP_SERVER_URL) private config: String,
              private http: HttpClient) {
  }

  getApiUrl(): String {
    return this.config;
  }
}
