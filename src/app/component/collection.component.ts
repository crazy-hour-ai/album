import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlbumList } from '../models';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  @Output() addNewAlbum = new EventEmitter<AlbumList>();
  
  albumObject : AlbumList;

  processForm(form: NgForm) {
    const values = form.value;

    const albumObject = {
        albumName : form.value.albumName,
        artist : form.value.artist,
        albumCoverImage : null,
        rating : null
    }
    
    this.addNewAlbum.emit(albumObject);
    console.log('Album object is: ' + albumObject);
    form.reset();
  }

  constructor() { }

  ngOnInit() {
  }

}
