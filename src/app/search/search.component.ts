import { Component, Input, OnInit } from '@angular/core';
import { AlbumsService } from '../services/albums.service';
import { Albums } from '../albums';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  receive!: Albums[];
  aside!: Albums;
  userId!: string;
  filtre: Albums[] = [];
  keyword: string = '';
  constructor(private albums: AlbumsService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.receive = this.albums.albumPhoto;

    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id') || '';
    });
  }
  send(album: Albums) {
    this.aside = album;
  }
  search() {
    if (this.keyword.trim() !== "") {
      this.receive = this.albums.albumPhoto.filter((el) => el.title.toLowerCase().includes(this.keyword.toLowerCase()))

    } else {
      this.receive = this.albums.albumPhoto
    }
  }

}
