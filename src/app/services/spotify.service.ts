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

    const token = 'BQBoFx5gDkqzvCxjWIYphlib1hgP95nOmFrtPcmkx543kw3oxd-IxvQ64jpWz_1LSU9-5q_WsbylzKu0TFN27boKB7-ygwY1gXHHRh_OPeZUzSRHS1M'

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

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=es`)
      .pipe(map((data: any) => data['tracks']))
  }
}
