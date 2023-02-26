import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent {
data = [
  {name: 'Ben', age: 24 , job: 'Engineer'},
  {name: 'Jeo', age: 35 , job: 'Doctor'},
  {name: 'Rahul', age: 27 , job: 'Designer'}
];

headers = [
  {key: 'name', label:'Name'},
  {key:'age', label:'Age'},
  {key:'job', label:'Job'}
]
}
