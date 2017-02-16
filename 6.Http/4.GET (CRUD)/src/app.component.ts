import { Component } from '@angular/core';
import { BookmarkService } from './bookmark.service';

@Component({
  selector: 'bookmark-app',
  template: `
    <div class="panel panel-default">
      <table class="table table-striped">
        <tr *ngFor="let bookmark of bookmarks">
          <td>
            <a [href]="bookmark.url" target="_blank">{{bookmark.title}}</a>
          </td>
        </tr>
      </table>
    </div>
  `,//[href] - link bind to each bookmark.url
    //target="_blank" - open link in new table
})
export class AppComponent {

  bookmarks = [];

  constructor(private bookmarkService: BookmarkService) { //inject BookmarkService that make HTTP CRUD requests
   //call GET http bookmarks and assign them to bookmarks prop:
    this.bookmarkService.getBookmarks()
      .then(bookmarks =>{
     this.bookmarks = bookmarks; console.log(bookmarks) } ); //when response come assign it to bookmarks prop
        
  }

}
