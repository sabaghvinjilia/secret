import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  Log(data:any){
    console.log(data)
  }
}
