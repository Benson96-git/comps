import { Component } from '@angular/core';

@Component({
  selector: 'app-view-home-component',
  templateUrl: './view-home-component.component.html',
  styleUrls: ['./view-home-component.component.css']
})
export class ViewHomeComponentComponent {
  stats=[
    {value: 22, label:'# of users'},
    {value: 500, label:'Revenue'},
    {value: 22, label:'Reviews'}
  ]

}
