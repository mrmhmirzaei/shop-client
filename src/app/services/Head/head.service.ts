import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Head {

  constructor() { }
  setTitle(title='', full=false){
    if(full==true) document.title = title;
    else {
      document.title = 'کارنید | '+title;
    }
    return true;
  }
  setMeta(name='', content=''){
    document.querySelector(`meta[name='${name}']`).setAttribute('content', content);
  }
}
