import { Component, EventEmitter, Input, input, OnInit, Output } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { AlbumsService } from '../services/albums.service';
import { Albums } from '../albums';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {

  constructor(private emitter:AlbumsService){}
 


}

