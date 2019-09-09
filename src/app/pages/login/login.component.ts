import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserUtil } from 'src/app/utils/user.utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private service: DataService,
    private fb: FormBuilder,
    private route: Router,
  ) {
    this.form = this.fb.group({
      username: [''],
      password: [''],
    })
  }

  ngOnInit() {
  }
  submit() {
    this.service.authenticate(this.form.value)
      .subscribe(
        (res: User) => {
          UserUtil.save(res);
          this.route.navigate(['']);
        }
      );
  }
}
