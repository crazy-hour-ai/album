import { Component } from '@angular/core';
import { Album} from './models'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-Vinyl-collection';
  album : Album;

  albumListArray: Album[] = [];

  addToAlbumList($event: Album){
    console.log('Album list: ' , $event);

    this.albumListArray.push( $event );
  }


}

