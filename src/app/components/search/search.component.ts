import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  constructor(private spotify: SpotifyService) { }

  terminoBusqueda: any[] = []

  buscar(termino: string) {
    this.spotify.getArtista(termino).subscribe((data: any) => {
      console.log(data);

      this.terminoBusqueda = data.artist.items
    })
  }


}
