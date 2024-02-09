import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-auth',
  standalone: true,
  imports: [],
  templateUrl: './page-not-auth.component.html',
  styleUrl: './page-not-auth.component.scss'
})
export class PageNotAuthComponent {

  constructor(private router: Router){

  }

  pageHome() {
    this.router.navigateByUrl('/login');
  }
}
