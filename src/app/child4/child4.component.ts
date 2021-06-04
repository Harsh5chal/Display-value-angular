import { Component, OnInit } from '@angular/core';
import {DataService} from '.././data.service';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit {

  event = '';
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.share.subscribe(x => this.event = x);
  }
}
