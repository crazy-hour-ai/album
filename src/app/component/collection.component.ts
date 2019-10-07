import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Album} from '../models';
import { ConcatSource } from 'webpack-sources';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  @Output() addNewAlbum = new EventEmitter<Album>();
  
  albumObject : Album;

  processForm(form: NgForm) {

    console.info('process form');
    const values = form.value;

    const albumObject = {
        albumName : form.value.albumName,
        artist : form.value.artist,
        albumCoverImage : form.value.albumCoverImage,
        rating : form.value.rating
    }
    
    this.addNewAlbum.emit(albumObject);
    console.log('Album object is: ' , albumObject);
    console.log('form:', form );
    form.resetForm();
  }

  constructor() { }

  ngOnInit() {
  }

}
