import { Component, OnInit } from '@angular/core';
import {DataService} from '.././data.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  event = '';
  constructor(private data: DataService) { }

  ngOnInit(): void {

    this.data.share.subscribe(x => this.event = x);
  }

}
