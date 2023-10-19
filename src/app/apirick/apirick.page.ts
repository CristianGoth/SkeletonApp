import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-apirick',
  templateUrl: './apirick.page.html',
  styleUrls: ['./apirick.page.scss'],
})
export class ApirickPage implements OnInit {

  characters: any;

  constructor(
    public http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/character')
      .subscribe(res => {
        console.log(res);
        this.characters = res.results;
      })
  }

}
