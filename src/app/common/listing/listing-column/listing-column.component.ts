import { Component, OnInit, ChangeDetectionStrategy, ContentChild, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'cricoin-listing-column',
  templateUrl: './listing-column.component.html',
  styleUrls: ['./listing-column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListingColumnComponent implements OnInit {

  @Input()
  label!: string;

  @Input()
  id!: string;

  @Input()
  align: 'left' | 'right' | 'center' = 'right';

  @Input()
  sort = false;

  @Input()
  hidable = false;

  @Input()
  colSpan!: number;

  @ContentChild(TemplateRef)
  columnTmpl!: TemplateRef<HTMLElement>;

  constructor() { }

  ngOnInit(): void {
  }

}
