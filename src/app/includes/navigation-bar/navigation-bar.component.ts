import { Component, OnInit } from '@angular/core';
import { Account } from '../../services/services.service';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  public accountMenuIsOpen: Boolean = false;
  public app_name: String = 'ققنوس ای تی';
  public menu: Object[] = [
    {
      category: 'لب تاب',
      photo: 'http://ghoghnoosit.com/wp-content/uploads/2018/03/1.png',
      menu: [
        {
          category: 'لب تاب و آلتابوک',
          items: [
            {
              name: 'لب تاب اپل',
            }, {
              name: 'لب تاب ایسوس',
            }
          ]
        }, {
          category: 'لوازم جانبی لب تاب',
          link: '',
          items: [
            {
              name: 'هارد'
            }
          ]
        }
      ]
    }, {
      category: 'لب تاب',
      photo: 'http://ghoghnoosit.com/wp-content/uploads/2018/03/1.png',
      menu: [
        {
          category: 'لب تاب و آلتابوک',
          items: [
            {
              name: 'لب تاب اپل',
            }, {
              name: 'لب تاب ایسوس',
            }
          ]
        }, {
          category: 'لوازم جانبی لب تاب',
          link: '',
          items: [
            {
              name: 'هارد'
            }
          ]
        }
      ]
    }
  ]
  constructor(public account: Account) { }

  ngOnInit() {
    this.account.load();
  }

  changeAccountMenuIsOpen(action){
    this.accountMenuIsOpen = action;
  }

}
