import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  majorFive = [];

  constructor() { }

  addPlayer(player) {
    this.majorFive.push(player);
  }

}