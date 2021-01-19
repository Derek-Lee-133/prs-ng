import { Component, OnInit } from '@angular/core';
import {MenuItem} from '../../model/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  menuItems: MenuItem[]=[
    new MenuItem("User","/user-list","Movie List"),
    new MenuItem("Login","/user-login","User Login")
  ];

  constructor() { }

  ngOnInit(): void {
  
  }

}
