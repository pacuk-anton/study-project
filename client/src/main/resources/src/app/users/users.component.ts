import {Component, OnInit} from '@angular/core';
import {UserODto} from '../../_common/generated';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: UserODto[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
    this.users = activatedRoute.snapshot.data['users'];
  }

  ngOnInit() {
  }

}
