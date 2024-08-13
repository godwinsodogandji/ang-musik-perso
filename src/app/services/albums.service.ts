import { Injectable } from '@angular/core';
import { Albums } from '../albums';
import { ALBUM_LISTS, ALBUMS } from '../mock-albums';
import { List } from '../list';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  albumPhoto: Albums[] = ALBUMS;
  constructor() { }
  albumList: List[] = ALBUM_LISTS;

  sendList(id:string) {
    return this.albumPhoto.filter((el: Albums) => el.id==id)
  }

}

