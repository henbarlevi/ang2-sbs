//a div that contain title,url inputs and save btn
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'bookmark-edit',
  template: `
    <div class="panel panel-primary">
      <div class="panel-body">
        <input type="text" [(ngModel)]="bookmark.title"
          placeholder="Title" style="width: 25%;">
        <input type="text" [(ngModel)]="bookmark.url"
          placeholder="URL" style="width: 50%;">
        <button (click)="onSave()" class="btn btn-primary">Save</button>
      </div>
    </div>
  `, //[(ngModel)]="bookmark.title",[(ngModel)]="bookmark.url" - 2 way bind to the bookmark prop
})
export class BookmarkEditComponent {

  bookmark = {};

  @Output() save = new EventEmitter();

  onSave() {
    this.save.emit(this.bookmark);
  }

}
