import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  @Input() section: any;
  @Input() count : any;
  @Input() totalPrice : any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
