import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NecklacesService {

  constructor(private http: HttpClient) { } //XMLHttpRequest API
  getAll() {
    return this.http.get('http://localhost:4200/necklaces') //return the necklaces
  }
}
