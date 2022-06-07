import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit, OnDestroy {
  public posts: ScullyRoute[] = [];
  private routeSub: Subscription | undefined;

  constructor(private scullyService: ScullyRoutesService) {}

  ngOnInit(): void {
    this.routeSub = this.scullyService.available$.subscribe((posts) => {
      this.posts = posts.filter((post) => post.title);
      console.log('POSTS', this.posts);
    });
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }
}
