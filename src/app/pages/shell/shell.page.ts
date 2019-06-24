import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.page.html',
  styleUrls: ['./shell.page.scss'],
})
export class ShellPage implements OnInit {
  public pages = [

      { url: './chores-dashboard', title: 'Dashboard'},
      { url: './my-account', title: 'My Account'},
      { url: './activity', title: 'Activity'},
      { url: './switch-accounts', title: 'Switch Accounts'},
      { url: './help', title: 'Help'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
