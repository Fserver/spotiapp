import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`

    const token = 'BQB8rasHdD-cfCWh9rDGm8qzoEjOxVzrD_ETmeBL7tADuRGwC1WT2mY3JZHLeT7c0J-5HHHhfTX9AVCDMOcGa-OJTdhvTbGZp4Jcb3BHu2y__Y6RhXg'

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })

    return this.http.get(url, { headers })
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(map((data: any) => {
      return data['albums'].items
    }))
  }

  getArtistas(termino: string) {
    //Metdo en 1 linea abreviado
    return this.getQuery(`search?q=${termino}&type=artist&limit=15&offset=5`)
      .pipe(map((data: any) => data['artists'].items))
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`)
  }
}
