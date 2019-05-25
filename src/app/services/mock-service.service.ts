import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MockServiceService {

  constructor(private http: HttpClient) { }

  getCards(){
    return this.http.get('http://localhost:3000/cards');
  }

  addCard(data){
    return this.http.post('http://localhost:3000/cards', data)
  }

  deleteCard(id){
    return this.http.delete('http://localhost:3000/cards', id);
  }
}
