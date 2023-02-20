import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{

  constructor(private httpClient: HttpClient) {}
   cartoonData:any=[]

  ngOnInit(): void {
    this.cartoonJson();
  }
  public cartoonJson(){
    this.httpClient.get('../../assets/data/cartoons.json')
    .subscribe(res=>{
      this.cartoonData=res})
    console.log(this.cartoonData);


  }


}
