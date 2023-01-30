import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class coinMarketApiServices {
  constructor(private http: HttpClient) {}
}
