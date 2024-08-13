import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Albums } from '../albums';
import { AlbumsService } from '../services/albums.service';
import { ALBUMS } from '../mock-albums';

@Component({
  selector: 'app-albums-description',
  templateUrl: './albums-description.component.html',
  styleUrl: './albums-description.component.css'
})
export class AlbumsDescriptionComponent implements OnInit {
  albumId!: string;
  album!:Albums[];
  albums: Albums[] = ALBUMS;
  constructor(private route: ActivatedRoute, private service:AlbumsService) { }
  ngOnInit(): void {
    this.albumId = this.route.snapshot.paramMap.get('id') || ''

    this.album = this.albums.filter((el:Albums)=>el.id==this.albumId)
  console.log(this.album);

  }

}
