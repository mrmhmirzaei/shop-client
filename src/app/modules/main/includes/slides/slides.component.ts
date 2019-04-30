import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidesComponent implements OnInit {

  public selectedIndex: number = 0;
  public transform: number = 0;
  public slides: Object[] = [
    {
      src: 'http://ghoghnoosit.com/wp-content/uploads/2018/03/pcb5ue3wuf8nywwu8scxqgyx11w5io0g2smnn4ppmzfzs1w6dj.jpg',
      title: 'انواع لب تاب های ایسوس',
      link: 'https://www.google.com'
    }, {
      src: "http://ghoghnoosit.com/wp-content/uploads/2018/03/cmt6o3ck5i8puz1sy5swh5brynyiq4ns44u44jlebvtq0oui5k.jpg",
      title: "انواع گوشی های موبایل",
      link: "https://www.google.com"
    }, {
      src: "http://ghoghnoosit.com/wp-content/uploads/2018/03/01.jpg",
      title: "انواع کامپیوتر های All in one",
      link: ""
    }

  ]
  constructor() { }

  ngOnInit() {
    this.transform = -880/2 + 100;
    setInterval(()=>this.animation(), 5000);
  }

  animation() {    
    if (this.selectedIndex + 1 == this.slides.length) {
      this.transform = -880/2 + 100;
      this.selectedIndex = 0;
    } else {
      this.transform =  this.transform + 880 + 880/4;
      this.selectedIndex = this.selectedIndex + 1;
    }
  }
}
