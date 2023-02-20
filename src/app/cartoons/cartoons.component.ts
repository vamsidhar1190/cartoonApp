import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cartoons',
  templateUrl: './cartoons.component.html',
  styleUrls: ['./cartoons.component.css']
})
export class CartoonsComponent implements OnInit {

constructor (private httpClient:HttpClient) { }
cartoonJson:any=[]
p:any=[]

ngOnInit(): void {
   this.readingCartoonJson();
  }
  public readingCartoonJson(){
    this.httpClient.get("../../assets/data/cartoons.json").subscribe(res=> {
      this.cartoonJson=res
      console.log(this.cartoonJson);
      
    });
        
    
    }  
    }


