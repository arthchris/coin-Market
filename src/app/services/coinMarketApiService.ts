import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class coinMarketApiServices {
  constructor(private http: HttpClient) {}

  coinMarketApi() {
    return this.http.get<any>(
      'https://pro-9b47b5a3-1bcc-4bd1-9e57-9e9820b93ed1.coinmarketcap.com'
    );
  }
}
