import { Component, OnInit, Input } from '@angular/core';
import { AlbumList } from '../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() albumListFromAdd: AlbumList[] = [];

  constructor() { }

  ngOnInit() {
  }

}
