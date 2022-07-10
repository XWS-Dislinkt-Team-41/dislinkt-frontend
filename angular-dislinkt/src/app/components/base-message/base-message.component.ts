import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-message',
  templateUrl: './base-message.component.html',
  styleUrls: ['./base-message.component.css'],
})
export class BaseMessageComponent implements OnInit {
  @Input() message!: string;
  @Input() time!: string;
  constructor() {}

  ngOnInit(): void {}
}
