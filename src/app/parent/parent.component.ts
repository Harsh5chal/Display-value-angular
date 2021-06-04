import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  event = '';
  constructor(private data: DataService) { }

  ngOnInit(): void {
  }
   updateEvent(event:any){
   this.data.updateData(event);
   console.log(event.target.value)
 }
}
