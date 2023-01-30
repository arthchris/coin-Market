import { Component, OnInit } from '@angular/core';
import { coinMarketApiServices } from 'src/app/services/coinMarketApiService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private service: coinMarketApiServices) {}

  ngOnInit(): void {}

  coinMarketApi() {
    this.service.coinMarketApi().subscribe((result) => {
      console.log(result);
    });
  }
}
