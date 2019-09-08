import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserUtil } from 'src/app/utils/user.utils';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    UserUtil.clear();
    this.route.navigate(['login']);
  }
}
