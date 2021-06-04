import { Component, OnInit } from '@angular/core';
import {DataService} from '.././data.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  event = '';
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.share.subscribe(x => this.event = x);
  }
}
