import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import cartoons from '../assets/data'


// interface Cartoons {
//   id: Number;
//   createdby: String;
//   createddate: String;
//   imageurl: String;
//   description:String;
// }

@Component({
  selector: 'app-cartoons',
  templateUrl: './cartoons.component.html',
  styleUrls: ['./cartoons.component.css']
})
export class CartoonsComponent implements OnInit {
  // cartoon: Cartoons[] = CartoonJson;

constructor (private httpClient:HttpClient) { }

 var_name='../assets/../data/cartoons.json'
  ngOnInit(): void {
    this.httpClient.get(this.var_name)
    .subscribe((data)=>{
      console.log(data)
    })
  }


}
