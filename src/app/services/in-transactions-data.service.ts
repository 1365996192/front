import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransactionsItem } from '../ulities/module'
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
  private transactions : TransactionsItem[] = [
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
      gender: "M",
      category: "work",
      merchant: "apple",
      city: "ch",
      state: "OK",
      population: 1000,
      amount: 2100,
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
      category: "work",
      merchant: "Abbott-Rogan",
      city: "sh",
      state: "OK",
      population: 100,
      amount: 100,
    },
    {
      gender: "F",
      category: "work",
      merchant: "Abbott-Rogan",
      city: "sh",
      state: "OK",
      population: 100,
      amount: 100,
    },
    {
      gender: "F",
      category: "work",
      merchant: "Abbott-Rogan",
      city: "sh",
      state: "OK",
      population: 100,
      amount: 100,
    },
    {
      gender: "F",
      category: "work",
      merchant: "Abbott-Rogan",
      city: "sh",
      state: "OK",
      population: 100,
      amount: 100,
    },
    {
      gender: "F",
      category: "work",
      merchant: "Abbott-Rogan",
      city: "sh",
      state: "OK",
      population: 100,
      amount: 100,
    },
    {
      gender: "F",
      category: "work",
      merchant: "Abbott-Rogan",
      city: "sh",
      state: "OK",
      population: 100,
      amount: 100,
    }
  ];

  createDb() {
    const listOfData=this.transactions 
    return { listOfData };
  }

  getFilteredData(searchTerm: TransactionsItem): TransactionsItem[] {
    return this.transactions.filter(transition => {
      return (
        (!searchTerm.gender || transition.gender.toLowerCase() === searchTerm.gender.toLowerCase()) &&
        (!searchTerm.category || transition.category.toLowerCase().includes(searchTerm.category.toLowerCase())) &&
        (!searchTerm.merchant || transition.merchant.toLowerCase().includes(searchTerm.merchant.toLowerCase())) &&
        (!searchTerm.city || transition.city.toLowerCase().includes(searchTerm.city.toLowerCase())) &&
        (!searchTerm.state || transition.state.toLowerCase().includes(searchTerm.state.toLowerCase()))&&
        (!searchTerm.amount || transition.amount === searchTerm.amount) &&
        (!searchTerm.amount || transition.amount === searchTerm.amount)
      );
    });
  }
}
