import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './goods_detail.component.html',
  styleUrls: ['./goods_detail.component.css']
})
export class GoodsDetailComponent implements OnInit{
  constructor(private route: ActivatedRoute) {

  }
  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('low_category'));
    console.log(this.route.snapshot.paramMap.get('high_category'));
    console.log(this.route.snapshot.paramMap.get('styleNum'));

  }
}
