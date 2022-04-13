import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

export class UserService {
private _login!:string
private _password!:string
private _firstName!:string
private _lastName!:string
private _age!:number

constructor(private logerService:LoggerService){

}

public get age():number{
  this.logerService.write('Получение возраста')
 return this._age
}
  public set  age(theAge:number){
    if(theAge<=0|| theAge>120){
      throw new Error('This age is invalid')
    }
    this._age=theAge;
  }
  public check(login:string, password:string) {
    if (login == 'ADMIN' && password == '12345') {
      return true
    }
    return false
  }
}
