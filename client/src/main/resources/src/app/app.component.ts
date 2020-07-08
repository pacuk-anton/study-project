import {Component} from '@angular/core';
import {MenuItem} from '../_common/classes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuItems: MenuItem[] = [
    {name: 'Главная', link: ''},
    {name: 'Пользователи', link: 'users'},
    {name: 'Роли', link: 'roles'},
  ];
}
