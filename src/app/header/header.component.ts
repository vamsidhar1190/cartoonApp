import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{

  private URL = '../assets/data/cartoons.json';

  constructor(private httpClient: HttpClient) {}


  ngOnInit(): void {
    this.httpClient.get(this.URL).subscribe(console.log);
    console.log('hello');


  }


}
