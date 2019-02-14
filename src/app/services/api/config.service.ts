import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Config } from '../../models/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private readonly http: HttpClient) { }

  get() {
    return this.http.get<Config>('http://localhost:4200/assets/config.json');
  }
}
