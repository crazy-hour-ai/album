import { Component } from '@angular/core';
import { AlbumList } from './models'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-Vinyl-collection';
  albumlist : AlbumList;

  albumListArray: AlbumList[] = []

  addToAlbumList($event: AlbumList){
    console.log('Album list: ' , $event);

    this.albumListArray.push( $event );
  }


}

