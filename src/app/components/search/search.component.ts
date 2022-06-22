import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  terminoBusqueda: any[] = []
  loading:boolean
  constructor(private spotify: SpotifyService) {
    this.loading=false
  }
  buscar(termino: string) {
    this.loading=true
    this.spotify.getArtistas(termino).subscribe((data: any) => {
      this.terminoBusqueda = data
      this.loading=false
    })
  }
}
