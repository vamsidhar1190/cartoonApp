import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CartoonDataService } from '../cartoon-data.service';
import { myObj,mainObj } from '../interface';


@Component({
  selector: 'app-cartoons',
  templateUrl: './cartoons.component.html',
  styleUrls: ['./cartoons.component.css']
})
export class CartoonsComponent implements OnInit {

constructor (private httpClient:HttpClient, private router:Router, private cartoonData:CartoonDataService ) { }

public cartoonJson:mainObj[]=[]

public pagination!:number

public getlocalstorage:any
public localD:myObj[]=[]

ngOnInit(): void {
  //  this.readingCartoonJson();
   this.getlocalstorage=localStorage.getItem('myData')
   this.localD=JSON.parse(this.getlocalstorage)
  
  }
      cartoons(item:Object){
      this.cartoonData.cartoonsdata(item)
    }

}


