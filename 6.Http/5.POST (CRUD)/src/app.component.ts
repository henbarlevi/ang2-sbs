import { Component } from '@angular/core';
import { BookmarkService } from './bookmark.service';

@Component({
  selector: 'bookmark-app',
  template: `
    <bookmark-edit (save)="save($event)"></bookmark-edit>
    <bookmark-list [bookmarks]="bookmarks"></bookmark-list>
  `,//contain the bookmark-list Component that present all bookmarks
    // and bookmark-edit that sho div with inputs and save btn to edit/add bookmarks
    //[bookmarks] bind to the bookmarks prop of bookmarks-list Component
})
export class AppComponent {

  bookmarks = [];

  constructor(private bookmarkService: BookmarkService) {
    this.reload();
  }

  save(bookmark) { // adding bookmark with HTTP post request and reload the bookmarks list
    this.bookmarkService.addBookmark(bookmark)
      .then(() => this.reload());
  }

  private reload() { //get bookmarks with GET http request and assign it to bookmarks prop
    return this.bookmarkService.getBookmarks()
      .then(bookmarks => this.bookmarks = bookmarks);
  }

}
