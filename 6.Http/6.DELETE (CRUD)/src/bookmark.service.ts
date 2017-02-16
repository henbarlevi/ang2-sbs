import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BookmarkService {

  private baseUrl = 'https://CHANGE-ME.firebaseio.com';

  constructor(private http: Http) { }

    //POST HTTP REQUEST
  addBookmark(bookmark) {
    const json = JSON.stringify(bookmark); //convert bookmark to json
    return this.http.post(`/bookmarks.json`, json) //post the json object
      .toPromise();
  }

  //GET HTTP REQUEST
  getBookmarks() { //will return bookmarks not imidetlly (async)
    return this.http.get('/bookmarks.json').toPromise() //'Get Request to 'localhost:8080/quote.json'
      .then(response => this.convert(response.json()));
  }

  //change the objects structure:
  convert(bookmarksResponse) {
    console.log(bookmarksResponse);

    return Object.keys(bookmarksResponse) //return array with bookmarks id's
      .map(id => ({ //transfrom the input - for each id return an object as describe:
        id: id,
        title: bookmarksResponse[id].title,
        url: bookmarksResponse[id].url
      }))
        .sort((a, b) => a.title.localeCompare(b.title)); //sort the array title (string)
  }
 //DELETE HTTP REQUEST
  removeBookmark(bookmark) {
    return this.http.delete(`${this.baseUrl}/bookmarks/${bookmark.id}.json`)
      .toPromise();
  }

 
}
