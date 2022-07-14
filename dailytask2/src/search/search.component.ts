import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
color:string="";
id:number=0;
  constructor(private ar:ActivatedRoute) {
    this.ar.queryParams.subscribe((data)=>{
      this.color=data['color'];
      this.id=data['id'];
      console.log(this.color+" "+this.id);
      // console.log(this.color);
    })

   }

  ngOnInit(): void {
  }

}
