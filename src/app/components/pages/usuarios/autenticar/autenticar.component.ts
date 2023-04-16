import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-autenticar',
  templateUrl: './autenticar.component.html',
  styleUrls: ['./autenticar.component.css']
})
export class AutenticarComponent {

  mensagem: string = '';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  formLogin = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    senha: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+=[\]{}|\\,./?]).{8,20}$/)
    ])
  });

  get form(): any {
    return this.formLogin.controls;
  }

  onSubmit(): void {

    this.mensagem = "Processando, por favor aguarde...";

    this.httpClient.post(environment.apiUsuarios + "/usuarios/autenticar", this.formLogin.value)
      .subscribe({
        next: (data) => {
          localStorage.setItem('auth', JSON.stringify(data));
          window.location.href = '/consultar-produtos';
        },
        error: (e) => {
          this.mensagem = 'Acesso não autorizado.';
        }
      });
  }

}
