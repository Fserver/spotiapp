import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  nuevasCanciones: any[] = []
  loading:boolean
  messageError:string=''
  constructor(private spotify: SpotifyService) {
    this.loading = true
    spotify.getNewReleases().subscribe((data: any) => {
      this.nuevasCanciones = data
      this.loading=false
    }, (error)=>{
      this.messageError = error
    })
  }
}
