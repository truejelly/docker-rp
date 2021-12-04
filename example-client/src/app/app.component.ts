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

  send(port?: string): void {
    this.httpClient
      .get(`${window.origin}${port}/test`)
      .subscribe((response) => console.log(response));
  }
}
