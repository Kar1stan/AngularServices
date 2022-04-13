import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  inputAge!: number
  message!: string
  loginForm:any={
    login:'',
    password:''
  }
  constructor(private _userService: UserService) { }
  getAge() {
    this._userService.age = this.inputAge;
    console.log(this._userService.age)
  }
  printForm(){
    if (this._userService.check(this.loginForm.login, this.loginForm.password)) {
      this.message = 'Пользователь авторизирован'
    } else {
      this.message = 'Пользователь НЕ авторизирован'
    }
  }
  ngOnInit(): void {
  }
}
