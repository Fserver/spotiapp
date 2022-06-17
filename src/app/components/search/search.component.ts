import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  terminoBusqueda: any[] = []
  constructor(private spotify: SpotifyService) { }
  buscar(termino: string) {
    this.spotify.getArtista(termino).subscribe((data: any) => {
      this.terminoBusqueda = data
    })
  }
}
