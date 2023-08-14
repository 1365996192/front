//传给后端的数据
export interface TransactionsItem {
    gender: string;
    category: string;
    merchant: string;
    city: string;
    state: string;
    job:string;
    amt:number
  }

  export interface TransactionsItemAll {
    gender: string;
    category: string;
    merchant: string;
    city: string;
    state: string;
    population:number;
    amt:number
    trans_time:string;
    trans_num:number;
    first_name:string;
    last_name:string;
    job:string;
    dob:string
  }

export  interface ColumnItem {
    name: string;
    // sortOrder: NzTableSortOrder | null;
    // sortFn: NzTableSortFn<TransactionsItem> | null;
    // listOfFilter: NzTableFilterList;
    // filterFn: NzTableFilterFn<TransactionsItem> | null;
    // filterMultiple: boolean;
    // sortDirections: NzTableSortOrder[];
  }