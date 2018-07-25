import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
public hospitals=["matrix","vikram","apollo","yashoda","maxcure","care"];

 public searchInput:any;
 public any=["../assets/apollo.jpg","../assets/care.jpg","../assets/matrix.jpg"
 ,"../assets/maxcure.jpg","../assets/vikram.jpg","../assets/yashoda.jpg"]

  constructor() { }

  ngOnInit() {
  }

}
