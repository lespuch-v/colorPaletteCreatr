import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private url: string = 'http://localhost:3000/color-palette';

  data: any;

  constructor(private http: HttpClient) {
  }

  postData( data: any){
    return this.http.post(this.url, data)
  }

  testBackEnd(){
    return this.http.get('http://localhost:3000/test').subscribe((response)=> {
      console.log(response)
    })
  }
}
