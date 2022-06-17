import { Component, OnInit } from '@angular/core';

interface Home{
  title:string;
  subtitle:string;
  image:string;
}

@Component  ({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'angular-dislinkt';
}
