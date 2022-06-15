import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  nuevasCanciones: any[] = []
  constructor(private spotify: SpotifyService) {
    spotify.getNewReleases().subscribe((data: any) => {
      console.log(data.albums.items);
      this.nuevasCanciones = data.albums.items
    })
  }


}
