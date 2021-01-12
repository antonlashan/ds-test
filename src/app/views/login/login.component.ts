import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginParams } from '../../../app/auth/auth';
import { AuthService } from '../../../app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  failierMsg = '';
  returnUrl!: string;
  hide = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.authService.deAuthenticate();
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });

    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/dashboard';
  }

  onSubmit() {
    this.failierMsg = '';
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    const { email, password } = this.form.value as LoginParams;

    console.log(email, password);
    this.authService.authenticate({ email, password }).subscribe((d) => {
      if (d) {
        this.router.navigate([this.returnUrl]);
      } else {
        this.failierMsg = 'Login failed';
      }
    });
  }
}
