import { Component } from '@angular/core';
import { BookmarkService } from './bookmark.service';

@Component({
  selector: 'bookmark-app',
  template: `
    <bookmark-edit (save)="save($event)"></bookmark-edit>
    <bookmark-list [bookmarks]="bookmarks"
      (remove)="remove($event)"></bookmark-list>
  `,//(remove)="remove($event)" - 'remove' event happend when delete btn is click, the eventEmitter of the bookmark-list
  //will raise the event with the bookmark object ($event=bookmark) sending it to the remove method
})
export class AppComponent {

  bookmarks = [];

  constructor(private bookmarkService: BookmarkService) {
    this.reload();
  }
  //get a bookmark to delete and using BookmarkService to send HTTP delete request
  remove(bookmark) {
    this.bookmarkService.removeBookmark(bookmark)
      .then(() => this.reload());    
  }

  save(bookmark) {// adding bookmark using BookmarkService that send HTTP post request and reload the bookmarks list
    this.bookmarkService.addBookmark(bookmark)
      .then(() => this.reload());
  }

  private reload() {//get bookmarks with GET http request and assign it to bookmarks prop
    return this.bookmarkService.getBookmarks()
      .then(bookmarks => this.bookmarks = bookmarks);
  }

}
