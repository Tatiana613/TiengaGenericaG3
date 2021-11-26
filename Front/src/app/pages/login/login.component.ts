import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private toastr: ToastrService, private router: Router) { }

  // login
  listausers = ['Karen', 'Karen12', 'admin', 'user'];
  usercorrecto = 'admininicial';
  passcorrecto = 'admin123456';
  user = '';
  pass = '';
  correcto = -1;
  comparar() {
    if (this.user === this.usercorrecto) {
      this.correcto = 1;
      if (this.pass === this.passcorrecto) {
        this.correcto = 1;
  

        this.router.navigate(['/clientes'])
      } else {
        this.correcto = 0;

      }
    } else {
      this.correcto = 0;
    }
  }


  ngOnInit(): void {
  }

}
