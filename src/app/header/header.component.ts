import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  ativo = "";
  ngOnInit() {
    
  }

  menu(){
    if(this.ativo==""){
      this.ativo = "active";
    } else {
      this.ativo = "";
    }
  }

  roll(value: string){

  }

}
