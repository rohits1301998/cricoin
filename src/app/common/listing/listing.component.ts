import { EventEmitter, Output, TemplateRef } from '@angular/core';
import { Component, OnInit, ChangeDetectionStrategy, Input, ContentChildren, QueryList } from '@angular/core';
import { IListRow, ISortedColumn } from './listing';
import { ListingColumnComponent } from './listing-column/listing-column.component';

@Component({
  selector: 'cricoin-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListingComponent implements OnInit {

  @Input()
  dataSource: IListRow[] = [];

  @Input()
  expandedRowTmpl?: TemplateRef<HTMLElement>;

  @Input()
  loading = false

  @Output()
  rowExpanded = new EventEmitter<IListRow>();

  @Output()
  sortingChanged = new EventEmitter<ISortedColumn>();

  @ContentChildren(ListingColumnComponent)
  columns!: QueryList<ListingColumnComponent>;

  sortedColumn?: ISortedColumn;

  private _previousToggledRow?: IListRow;


  constructor() { }

  ngOnInit(): void {
  }

  toggleRow(row: IListRow) {
    if (this.expandedRowTmpl) {
      if (this._previousToggledRow && !row.expanded) {
        this._previousToggledRow.expanded = false;
      }
      row.expanded = !row.expanded;
      if (row.expanded) {
        this._previousToggledRow = row;
        this.rowExpanded.emit(row);
      }
    }
  }

  toggleColumnSort(column: ListingColumnComponent) {
    if (column.sort) {
      this.sortedColumn = {
        id: column.id,
        direction: this.sortedColumn ? this.sortedColumn.direction === 'ASC' ? 'DESC' : 'ASC' : 'ASC'
      };
      this.sortingChanged.emit(this.sortedColumn);
    }
  }


  _listDataTracker(index: number, data: ListingColumnComponent | IListRow): string {
    return data.id;
  }

}
