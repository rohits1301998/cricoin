export interface IListRow {
  id: string;
  expanded?: boolean;
  [key: string]: any;
}


export interface ISortedColumn {
  id: string;
  direction: 'ASC' | 'DESC';
}