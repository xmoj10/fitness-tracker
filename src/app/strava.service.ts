import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StravaService {

  private readonly clientId = 'YOUR_CLIENT_ID'; // Replace with your Strava client ID
  private readonly clientSecret = 'YOUR_CLIENT_SECRET'; // Replace with your Strava client secret (KEEP THIS SECURE!)
  private readonly redirectUri = 'http://localhost:4200/strava-callback';
  private readonly stravaAuthUrl = 'https://www.strava.com/oauth/authorize';
  private readonly stravaTokenUrl = 'https://www.strava.com/oauth/token';

  constructor(private http: HttpClient) { }

  public initiateAuthentication() {
    const scope = 'activity:write';
    const responseType = 'code';
    const url = `${this.stravaAuthUrl}?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&response_type=${responseType}&scope=${scope}`;
    window.location.href = url;
  }

  public handleAccessToken(code: string) {
    const body = {
      client_id: this.clientId,
      client_secret: this.clientSecret,
      code: code,
      grant_type: 'authorization_code',
    };

    this.http.post(this.stravaTokenUrl, body).subscribe(
      (response: any) => {
        console.log('Access Token Response:', response);
        // Store the access token securely (e.g., in local storage or a more secure backend)
        localStorage.setItem('strava_access_token', response.access_token);
        // You might want to redirect the user to a dashboard or home page here
      },
      (error) => {
        console.error('Error exchanging code for token:', error);
      }
    );
  }
}
