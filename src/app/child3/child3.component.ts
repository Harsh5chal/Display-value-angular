import { Component, OnInit } from '@angular/core';
import {DataService} from '.././data.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  event = '';
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.share.subscribe(x => this.event = x);
  }
}
