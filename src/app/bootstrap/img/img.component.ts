import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'cricoin-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImgComponent implements OnInit {

  @Input()
  src!: string;

  @Input()
  alt?: string;

  @Input()
  width: number = 300;

  @Input()
  height: number = 300;

  constructor() { }

  ngOnInit(): void {
  }

}
