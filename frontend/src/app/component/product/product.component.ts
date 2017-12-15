import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {SweatersService} from "../../service/men/sweaters.service";


@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: any;

  constructor( private route: ActivatedRoute, private sweaterService: SweatersService) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.sweaterService.getById(+params.get('id')))
      .subscribe(product => this.product = product);

    console.log(this.route.snapshot.paramMap.get('high_category'))
    console.log(this.route.snapshot.paramMap.get('low_category'))
  }

}
