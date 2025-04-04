import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) {

  }

login() {

  localStorage.setItem('user_session', 'UserTest');
  const userLog = localStorage.getItem('user_session');

  if( userLog ) {
    this.router.navigate(['admin']);
    alert('Login realizado com sucesso!' + userLog);
  }
  else {
    alert('não foi possivel logar' + userLog);
  }
  
}

}
