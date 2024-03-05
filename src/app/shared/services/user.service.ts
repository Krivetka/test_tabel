import {inject, Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TData, TSearchData} from "../models/TData";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  data: WritableSignal<TData[] | null> = signal(null);

  httpClient: HttpClient = inject(HttpClient);
  constructor() {
    this.getData()
  }

  getData() {
    this.httpClient.get<TData[]>("https://api.github.com/users").subscribe((data: TData[]) => {
      this.data.set(data);
    });
  }

  getSearchData(param:string) {
    this.httpClient.get<TSearchData>(`https://api.github.com/search/users?q=${param}`).subscribe((data: TSearchData) => {
      this.data.set(data.items);
    });
  }
}
