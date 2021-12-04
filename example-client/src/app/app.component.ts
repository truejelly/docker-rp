import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'example-client';

  constructor(private readonly httpClient: HttpClient) {}

  send(): void {
    this.httpClient.get('http://example-nginx/test').subscribe((response) => console.log(response));
  }
}
