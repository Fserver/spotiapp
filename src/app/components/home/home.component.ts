import { Component } from '@angular/core';
import { map } from 'rxjs';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  nuevasCanciones: any[] = []
  constructor(private spotify: SpotifyService) {
    spotify.getNewReleases().subscribe((data: any) => {
      this.nuevasCanciones = data
    })
  }
}
