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
  searchQuery = '';
  items: string[];

  constructor(private playerService: SwPlayerService) {
    this.playerService.getPlayers()
      .subscribe(data => this.players = data)
  }

  initializeItems() {
    this.items = this.players;
  }
  ngOnInit() {
    this.initializeItems();
  }

  getItems(ev) {
    this.initializeItems();

    const val = ev.target.value;

    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}



