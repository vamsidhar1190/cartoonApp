import { Component,ElementRef,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { myObj } from '../interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent  implements OnInit{


  constructor(private httpClient: HttpClient) {}
   cartoonData:any=[]
  searchText:string=""
  res:myObj[]=[]
  keyword='name'

  
  ngOnInit(): void {
    this.cartoonJson();
    
  }
  public cartoonJson(){
    this.httpClient.get('../../assets/data/cartoons.json')
    .subscribe(res=>{
      this.cartoonData=res})
    console.log(this.cartoonData);
  }

   search(query:string){
    this.cartoonData = this.res.filter((item:any)=>
    item.title.toLowerCase().includes(query.toLowerCase())
    );
  }
     selectEvent(cartoon:any) {    
    }
  onChangeSearch(search: string) { 
    console.log("search",search);
    
  }

data(event:any){
  console.log(event.target.value);
}

}





