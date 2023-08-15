import { Component } from '@angular/core';

import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

// interface DataItem {
//   name: string;
//   age: number;
//   address: string;
// }

interface TransactionsItem {
  gender: string;
  category: string;
  merchant: string;
  city: string;
  state: string;
  population: number;
  amount: number;
}

interface ColumnItem {
  name: string;
  // sortOrder: NzTableSortOrder | null;
  // sortFn: NzTableSortFn<TransactionsItem> | null;
  // listOfFilter: NzTableFilterList;
  // filterFn: NzTableFilterFn<TransactionsItem> | null;
  // filterMultiple: boolean;
  // sortDirections: NzTableSortOrder[];
}

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent {
  
  listOfColumn: ColumnItem[] = [
    {
      name: 'Gender'
      // sortOrder: null,
      // sortFn: (a: TransactionsItem, b: TransactionsItem) => a.gender.localeCompare(b.gender),
      // sortDirections: ['ascend', 'descend', null],
      // filterMultiple: true,
      // listOfFilter: [
      //   { text: 'Joe', value: 'Joe' },
      //   { text: 'Jim', value: 'Jim', byDefault: true }
      // ],
      // filterFn: (list: string[], item: TransactionsItem) => list.some(name => item.gender.indexOf(gender) !== -1)
    },
    {
      name: 'category',
      // sortOrder: 'descend',
      // sortFn: (a: TransactionsItem, b: TransactionsItem) => a.age - b.age,
      // sortDirections: ['descend', null],
      // listOfFilter: [],
      // filterFn: null,
      // filterMultiple: true
    },
    {
      name: 'merchant',
      // sortOrder: null,
      // sortDirections: ['ascend', 'descend', null],
      // sortFn: (a: DataItem, b: DataItem) => a.address.length - b.address.length,
      // filterMultiple: false,
      // listOfFilter: [
      //   { text: 'London', value: 'London' },
      //   { text: 'Sidney', value: 'Sidney' }
      // ],
      // filterFn: (address: string, item: DataItem) => item.address.indexOf(address) !== -1
    },
    {name: 'city'},
    {name: 'state'},
    {name: 'population'},
    {name: 'amount'}
  ];
  listOfData: TransactionsItem[] = [
    {
      gender: "F",
      category: "entertainment",
      merchant: "Abbott-Rogan",
      city: "sh",
      state: "OK",
      population: 100,
      amount: 100,
    },
    {
      gender: "F",
      category: "entertainment",
      merchant: "Abbott-Rogan",
      city: "sh",
      state: "OK",
      population: 100,
      amount: 100,
    },
    {
      gender: "F",
      category: "entertainment",
      merchant: "Abbott-Rogan",
      city: "sh",
      state: "OK",
      population: 100,
      amount: 100,
    },
    {
      gender: "F",
      category: "entertainment",
      merchant: "Abbott-Rogan",
      city: "sh",
      state: "OK",
      population: 100,
      amount: 100,
    }
  ];
}
