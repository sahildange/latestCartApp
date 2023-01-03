import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bgColor = "primary";
  color = 'accent';
  title = 'angularTask';
  site : string | undefined

//no need of 3 arrays, data is stored in new TableDeatils array in TS file

  constructor(){}

  ngOnInit(){
  }
}
