import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  email: string = '';
  emailSent: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  sendEmail(): void {
    // Aqui você pode adicionar a lógica para enviar o email
    // Por exemplo, você pode fazer uma chamada HTTP para enviar o email
    // Neste exemplo, apenas simularemos o envio de email e exibiremos a mensagem

    // Simular o envio de email
    setTimeout(() => {
      this.emailSent = true;
    
      // Após 3 segundos, retornar para a página inicial
      setTimeout(() => {
        this.router.navigate(['']); // Navega de volta para a página inicial
      }, 3000);

    }, 2000);
  }
}
