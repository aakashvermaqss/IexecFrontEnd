import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataArray: any[] = [];

  constructor() { }

  getDataArray(): any[] {
    return this.dataArray;
  }

  setDataArray(data: any[]): void {
    this.dataArray = data;
  }
}
