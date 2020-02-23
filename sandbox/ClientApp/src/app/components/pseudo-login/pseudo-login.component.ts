import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-pseudo-login',
  templateUrl: './pseudo-login.component.html',
  styleUrls: ['./pseudo-login.component.css']
})
export class PseudoLoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private session: AuthenticationService) { }

  get f() { return this.loginForm.controls; }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const loggedIn = this.session.loginUser(this.f.username.value, this.f.password.value);
    if (loggedIn) {

      this.router.navigate(['/']); 
    } else {
      console.log("login hit the fan!");
    } 
    
  }
}
