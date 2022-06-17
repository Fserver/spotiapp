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

    const token = 'BQDHWbDJVcaAxsJ8mHVUbuxgkP_WFjIvo3YmUhUuJ-nTqj770lxUh4kV4og_ALAXdfj2_9qxP3PfElJp25Zpi3TeXCFskNiQK1VIW3igalYR2HZacuqT'

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })

    return this.http.get(url, { headers })
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(map((data: any) => {
      console.log(data);
      return data['albums'].items
    }))
  }

  getArtista(termino: string) {
    //Metdo en 1 linea abreviado
    return this.getQuery(`search?q=${termino}&type=artist&limit=15&offset=5`)
      .pipe(map((data: any) => data['artists'].items))
  }
}
