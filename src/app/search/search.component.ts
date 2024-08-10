import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../services/albums.service';
import { Albums } from '../albums';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  receive!: Albums[];
  constructor(private albums: AlbumsService) { }
  ngOnInit(): void {
    this.receive = this.albums.albumPhoto

  }
}
