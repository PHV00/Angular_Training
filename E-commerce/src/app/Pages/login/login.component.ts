import { Component , inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../Services/Login/login.service';
import { LoginResponse } from '../../Interfaces/login-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  _fb = inject(FormBuilder)
  loginService = inject(LoginService)
  resposta?: LoginResponse
  router = inject(Router)

  form = this._fb.group({
    username : ["",Validators.required],
    password : ["",Validators.required],
    })

  logar(){
    this.loginService
      .logar(
        this.form.controls.username.value!,
        this.form.controls.password.value!
      ).subscribe({
        next:(val:LoginResponse)=>{
          this.resposta = val
          this.router.navigate(["Home"])
        }
      })
  }
}
