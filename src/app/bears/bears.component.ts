import { Component, OnInit } from '@angular/core';
import {BearsService} from "../bears.service";

@Component({
  selector: 'app-bears',
  templateUrl: './bears.component.html',
  styleUrls: ['./bears.component.css']
})
export class BearsComponent implements OnInit {
  bears: any = [];

  constructor(private bearsService: BearsService) { }

  ngOnInit() {
    this.bearsService.getAllBears().subscribe(bears =>
    {
      this.bears = bears;
    });
  }

}
