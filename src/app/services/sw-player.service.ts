import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Iplayers} from '../players'

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
  private _url: string = "/assets/data/api.json"


  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Iplayers[]>{
    return this.http.get<Iplayers[]>(this._url);
  }

}
