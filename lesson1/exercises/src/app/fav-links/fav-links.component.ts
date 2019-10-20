import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLink1 = "https://www.d20pfsrd.com";
  faveLink2 = "https://mega.nz/#F!nE0hGIRL!gOFNKfhyFfoLeuJEWzl51g!mN9V2aLB";
  constructor() { }

  ngOnInit() {
  }

}
