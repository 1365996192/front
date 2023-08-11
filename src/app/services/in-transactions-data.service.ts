import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransactionsItem, TransactionsItemAll } from '../ulities/module'
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { transition } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
//真实API
// export class DataService {
//   private baseUrl = 'https://localhost:8080;

//   constructor(private http: HttpClient) { }

//   getTransactions(): Observable<TransactionsItem[]> {
//     return this.http.get<any[]>(`${this.baseUrl}/api/users`);
//   }
// }

//假数据
export class DataService implements InMemoryDbService {
  private transactions : TransactionsItemAll[] = [
    {
      gender: "F",
      category: "entertainment",
      merchant: "Abbott-Rogan",
      city: "sh",
      state: "OK",
      population: 100,
      amount: 1,
      trans_time:'1',
      trans_num:1,
      first_name:'string',
      last_name:'string',
      job:'string',
      dob:'string'
    },
    {
      gender: "M",
      category: "work",
      merchant: "apple",
      city: "ch",
      state: "OK",
      population: 1000,
      amount: 2,
      trans_time:'1',
      trans_num:1,
      first_name:'string',
      last_name:'string',
      job:'string',
      dob:'string'
    },
    {
      gender: "F",
      category: "entertainment",
      merchant: "Abbott-Rogan",
      city: "sh",
      state: "OK",
      population: 100,
      amount: 2,
      trans_time:'1',
      trans_num:1,
      first_name:'string',
      last_name:'string',
      job:'string',
      dob:'string'
    },
    {
      gender: "F",
      category: "work",
      merchant: "Abbott-Rogan",
      city: "sh",
      state: "OK",
      population: 100,
      amount: 1,
      trans_time:'1',
      trans_num:1,
      first_name:'string',
      last_name:'string',
      job:'string',
      dob:'string'
    },
    {
      gender: "F",
      category: "work",
      merchant: "Abbott-Rogan",
      city: "sh",
      state: "OK",
      population: 100,
      amount: 1,
      trans_time:'1',
      trans_num:1,
      first_name:'string',
      last_name:'string',
      job:'string',
      dob:'string'
    },
    {
      gender: "F",
      category: "work",
      merchant: "Abbott-Rogan",
      city: "sh",
      state: "OK",
      population: 100,
      amount: 2,
      trans_time:'1',
      trans_num:1,
      first_name:'string',
      last_name:'string',
      job:'string',
      dob:'string'
    },
    {
      gender: "F",
      category: "work",
      merchant: "Abbott-Rogan",
      city: "sh",
      state: "OK",
      population: 100,
      amount: 1,
      trans_time:'1',
      trans_num:1,
      first_name:'string',
      last_name:'string',
      job:'string',
      dob:'string'
    },
    {
      gender: "F",
      category: "work",
      merchant: "Abbott-Rogan",
      city: "sh",
      state: "OK",
      population: 100,
      amount: 1,
      trans_time:'1',
      trans_num:1,
      first_name:'string',
      last_name:'string',
      job:'string',
      dob:'string'
    },
    {
      gender: "F",
      category: "work",
      merchant: "Abbott-Rogan",
      city: "sh",
      state: "OK",
      population: 100,
      amount: 2,
      trans_time:'1',
      trans_num:1,
      first_name:'string',
      last_name:'string',
      job:'string',
      dob:'string'
    }
  ];

  createDb() {
    const listOfData=this.transactions 
    return { listOfData };
  }

  getFilteredData(searchTerm: TransactionsItem): TransactionsItemAll[] {
    //参数改值的
    //先对searchTerm进行处理，即null改成空格这些
    //然后再加到api上获取数据
    const requestBody : TransactionsItem = {
      gender: searchTerm.gender || " ",
      category: searchTerm.category || " ",
      merchant: searchTerm.merchant || " ",
      city: searchTerm.city || " ",
      state: searchTerm.state || " ",
      job:searchTerm.job || " ",
      amount:searchTerm.amount || -1
    }
      return this.transactions.filter(transition => {
        return (
          (!searchTerm.gender || transition.gender.toLowerCase() === searchTerm.gender.toLowerCase()) &&
          (!searchTerm.category || transition.category.toLowerCase().includes(searchTerm.category.toLowerCase())) &&
          (!searchTerm.merchant || transition.merchant.toLowerCase().includes(searchTerm.merchant.toLowerCase())) &&
          (!searchTerm.city || transition.city.toLowerCase().includes(searchTerm.city.toLowerCase())) &&
          (!searchTerm.state || transition.state.toLowerCase().includes(searchTerm.state.toLowerCase()))&&
          (!searchTerm.job || transition.job.toLowerCase().includes(searchTerm.job.toLowerCase())) &&
          (!searchTerm.amount || transition.amount == searchTerm.amount)
        );
      });
    }

    
  }

