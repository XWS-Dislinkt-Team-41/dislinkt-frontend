import { Component, Input, OnInit } from "@angular/core";
import { IPost } from "src/app/model/post";

@Component({
  selector: "app-news-feed",
  templateUrl: "./news-feed.component.html",
  styleUrls: ["./news-feed.component.css"],
})
export class NewsFeedComponent implements OnInit {
  
  @Input() posts: IPost[] = [];

  constructor() {}

  ngOnInit(): void {
  }
}
