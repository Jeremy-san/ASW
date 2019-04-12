import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SwPlayerService } from '../../services/sw-player.service';
import { subscribeOn } from 'rxjs/operators';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public players = [];
  shouldShowCancel = true;
  searchTerm ='';
  

  constructor(private playerService: SwPlayerService ) {

  }

  ngOnInit() {
   this.playerService.getPlayers()
   .subscribe(data => this.players = data)
  }

  filterSearch = this.players.filter((searchTerm) => {
    if(searchTerm == this.players){
      return true
    }
    }
   
  )}
