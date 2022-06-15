import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {

  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBV0sviiN_qi-uLOjK9YzNJwNVWxQuQsxAmaunY3_5rTNZ0jlIFszp5GeurMxmnzZ3JxH1rxMPzgVuoXf2oVfwEDuMVMgIQK6SrQ9lIa8BslQo4mWAz'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBV0sviiN_qi-uLOjK9YzNJwNVWxQuQsxAmaunY3_5rTNZ0jlIFszp5GeurMxmnzZ3JxH1rxMPzgVuoXf2oVfwEDuMVMgIQK6SrQ9lIa8BslQo4mWAz'
    })

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15&offset=5`, { headers })

  }
}
