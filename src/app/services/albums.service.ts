import { Injectable } from '@angular/core';
import { Albums } from '../albums';
import { ALBUMS } from '../mock-albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  albumPhoto: Albums[] = ALBUMS;
  constructor() { }

}
