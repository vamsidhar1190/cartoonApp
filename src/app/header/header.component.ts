import { Component,ElementRef,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { myObj , mainObj} from '../interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent  implements OnInit{


  constructor(private httpClient: HttpClient) {}
   
  public cartoonData:mainObj[]=[]
  public searchText:string=""
  public res:mainObj[]=[]
  public keyword='name'

 ngOnInit(): void {
    this.cartoonJson();
   
  }
  public cartoonJson(){
    this.httpClient.get<mainObj[]>('../../assets/data/cartoons.json')
    .subscribe(res=>{   
      this.cartoonData=res   
      })
  }
  
   search(query:string){
      if(this.searchText && this.searchText.length>=3)
    this.cartoonData = this.res.filter((item)=>
    item.title.toLowerCase().includes(query.toLowerCase())
    );
  }
   
  onChangeSearch(search: string) { 

    }

    cartoons(cartoon:mainObj){
  localStorage.setItem("myData",JSON.stringify(cartoon.mickyImgs))
}

}





