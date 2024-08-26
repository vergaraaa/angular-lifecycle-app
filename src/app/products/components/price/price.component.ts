import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css',
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  public price: number = 0;

  public interval$?: Subscription;

  ngOnInit(): void {
    console.log('Child component: ngOnInit');

    this.interval$ = interval(1000).subscribe((value) =>
      console.log(`Tick: ${value}`)
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({ changes });
    console.log('Child component: ngOnChanges');
  }

  ngOnDestroy(): void {
    console.log('Child component: ngOnDestroy');
    this.interval$?.unsubscribe();
  }
}
