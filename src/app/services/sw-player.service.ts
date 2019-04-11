import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum SearchType {
  all = '',
  id = 'id',
  name = 'name',
  height = 'height',
  mass = 'mass',
  image= 'image',
  species = 'species'

}

@Injectable({
  providedIn: 'root'
})

export class SwPlayerService {
  url="https://melroune.github.io/starwars-api/api/all.json";
  urlId = "https://melroune.github.io/starwars-api/api/.json`";

  constructor(private http: HttpClient) { }

  searchData(name:string, type: SearchType): Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(name)}&type=${type}`)
    .pipe(
      map(results => {
        console.log('RAW: ', results);
        return results['Search'];
        })
      );
    }

  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}`);
  }
}
