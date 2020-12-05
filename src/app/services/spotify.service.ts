import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
 
  constructor( private http: HttpClient) {
    console.log('Spotify Service Listo');
   }
 
   getNewReleases(){
 
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDiakogXrSRtQZQwXTpS-Rz13-dwQv1wgr5GDivC8Jq6tYJOn0QBIUErNPPF4WfD1_2_e8syCz-qZtgHgM'
  });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
   
  }
}
