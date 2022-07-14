import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private ar:ActivatedRoute) {
    this.ar.queryParams.subscribe((data)=>{console.log(data)})
   }

  ngOnInit(): void {
  }

}
