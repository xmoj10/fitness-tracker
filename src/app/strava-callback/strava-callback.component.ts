import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StravaService } from '../strava.service';

@Component({
  selector: 'app-strava-callback',
  standalone: true,
  imports: [],
  templateUrl: './strava-callback.component.html',
  styleUrl: './strava-callback.component.css'
})
export class StravaCallbackComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private stravaService: StravaService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const code = params['code'];
      if (code) {
        this.stravaService.handleAccessToken(code);
      }
    });
  }

}
