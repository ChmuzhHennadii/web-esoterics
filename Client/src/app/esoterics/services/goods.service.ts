import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Good } from '../models/goods/Good';

@Injectable({
  providedIn: 'root'
})
export class GoodsService extends BaseService<Good> {
  constructor() {
    super();
    this.items = [
      new Good(),
      new Good(),
      new Good(),
      new Good(),
      new Good(),
      new Good(),
      new Good(),
      new Good(),
      new Good(),
      new Good(),
    ];
  }
}