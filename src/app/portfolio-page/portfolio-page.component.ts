import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent implements OnInit {

titles: Array<string> = ["Wedding","People", "Nature", "Cities"];

  constructor() { }

  ngOnInit(): void {
  }

}
