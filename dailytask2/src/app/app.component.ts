import { Component } from '@angular/core';
import { UserdataService } from 'src/services/userdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dailytask2';
  users:any;
  constructor(private userData:UserdataService){
    this.userData.users().subscribe((data)=>  {this.users=data});
  }
}
