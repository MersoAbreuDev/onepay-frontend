import { Component } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class UserInfoComponent {
  userInfo = {
    name: 'John Doe',
    email: 'john.doe@example.com'
    // Adicione mais propriedades conforme necessário
  };
}
