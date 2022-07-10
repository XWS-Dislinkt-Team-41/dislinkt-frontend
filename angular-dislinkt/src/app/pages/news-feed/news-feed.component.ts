import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IPost } from "src/app/model/post";

@Component({
  selector: "app-news-feed",
  templateUrl: "./news-feed.component.html",
  styleUrls: ["./news-feed.component.css"],
})
export class NewsFeedComponent implements OnInit {
  
  @Input() posts: IPost[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  addPost() {
    this.router.navigateByUrl(`/addPost`);
  }
}
