import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.page.html',
  styleUrls: ['./perfiles.page.scss'],
})
export class PerfilesPage implements OnInit {

  perfilesId: string = ''; 
  character: any;


 
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id !== null) {
      this.perfilesId = id; 
    } else {
    }
     this.http.get('https://rickandmortyapi.com/api/character/' + this.perfilesId)
        .subscribe(res => this.character = res);
    
  }

}
