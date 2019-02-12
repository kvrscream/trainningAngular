//Link do tutorial https://medium.com/trainingcenter/criando-uma-aplica%C3%A7%C3%A3o-internet-banking-com-angular-6-na-pr%C3%A1tica-e-sem-complica%C3%A7%C3%B5es-6fcbf98dcc12

import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';

  constructor(public dialog: MatDialog){
  
  }

  openDialog() {
    const dialogRef = this.dialog.open(AppComponent, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

