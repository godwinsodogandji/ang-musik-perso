import { Component,  Input,  OnInit } from '@angular/core';
import { AlbumsService } from '../services/albums.service';
import { List } from '../list';
import { Albums } from '../albums';
import { ALBUM_LISTS } from '../mock-albums';

@Component({
  selector: 'app-albums-details',
  templateUrl: './albums-details.component.html',
  styleUrl: './albums-details.component.css'
})
export class AlbumsDetailsComponent  {
  receiveList!: List;
  @Input()
  detailsList?: Albums;
  constructor(private list: AlbumsService) { }
  ngOnChanges(): void {
this.receiveList = ALBUM_LISTS.filter((el)=>el.id==this.detailsList?.id)[0]
  }

}
