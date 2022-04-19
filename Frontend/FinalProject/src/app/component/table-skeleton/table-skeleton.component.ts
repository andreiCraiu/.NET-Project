import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-skeleton',
  templateUrl: './table-skeleton.component.html',
  styleUrls: ['./table-skeleton.component.scss']
})
export class TableSkeletonComponent implements OnInit {
  constructor() { }
  @Input() lineCount = 10
  ngOnInit(): void {
  }

}
