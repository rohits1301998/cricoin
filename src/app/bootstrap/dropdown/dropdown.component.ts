import { ChangeDetectionStrategy, Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { IOption } from './dropdown';

@Component({
  selector: 'cricoin-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent implements OnInit {

  @Input()
  label!: string;

  @Input()
  id!: string;

  @Input()
  options: IOption[] = [];

  @Input()
  displayField = 'name';

  @Input()
  defaultOption?: string

  @Output()
  optionSelected = new EventEmitter<IOption>();

  @ContentChild(TemplateRef)
  optionTmpl!: TemplateRef<HTMLElement>;

  isOpen = false;

  selectedOption?: IOption;

  get listId(): string {
    return 'dropdown-list' + DropdownComponent._listId;
  }

  private static _listId = 0;


  constructor() {
    DropdownComponent._listId++;
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {
  }

  selectItem(option: IOption) {
    this.selectedOption = option;
    this.optionSelected.emit(option);
    this.isOpen = false;
  }

}
