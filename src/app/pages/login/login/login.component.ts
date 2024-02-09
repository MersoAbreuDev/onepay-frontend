import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../../../shared/services/login/login.service';
import { Router } from '@angular/router';
import { User } from '../../../../shared/models/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  form = new FormGroup({
    email:new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl('',[Validators.required])
  })
  
  firebase = inject(LoginService);
  router = inject(Router);
  ngOnInit(){    
  }

  submit() {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      this.firebase.login({ email, password })
        .subscribe({
          next: (userCredential: any) => {
            console.log('Usuário autenticado:', userCredential.user);
            this.router.navigate(['home']);
          },
          error: (error) => {
            console.error('Erro de autenticação:', error.code, error.message);
          },
          complete: () => {
            // Executar ações adicionais quando a operação estiver completa, se necessário
          }
        });
    }
  }
}
