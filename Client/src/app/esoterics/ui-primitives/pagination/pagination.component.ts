import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sa-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() totalCount: number = 0;
  @Input() currentPage: number = 0;

  @Output() pageSelected = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  onPageClicked(page: number){
    if (1 <= page && page <= this.totalCount) {
      this.currentPage = page;
      this.pageSelected.emit(page);
    }
  }
}