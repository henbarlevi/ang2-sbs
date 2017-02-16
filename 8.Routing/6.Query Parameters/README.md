# Angular Tunes

An Angular 2 application that displays artists and albums.
Used to show how to use the Router to navigate between different components.
Sample data courtesy of [MusicBrainz](https://musicbrainz.org/).

To work on this project:

* Run `npm install` inside the project folder to download all the dependencies. This only needs to be done once.
* Run `npm run serve` to start a local development web server. You can now access the application at [localhost:8080](http://localhost:8080/).

fixed the issue that after we login we always go to the initial route instead of the recent view we visited
-we used query params to fix it
-logged-in.guard.ts - we sended the recent view url with query params
-login-form.component.ts - pulling the query param in order to go to the recent view after the login succeded