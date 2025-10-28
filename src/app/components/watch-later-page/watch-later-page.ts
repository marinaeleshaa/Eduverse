import { Component, OnInit } from '@angular/core';
import { HeadSection } from '../head-section/head-section';
import { WatchLaterService } from '../../services/watch-later-service';
import { Observable } from 'rxjs';
import { ICourse } from '../../Interfaces/icourse';

@Component({
  selector: 'app-watch-later-page',
  imports: [HeadSection],
  templateUrl: './watch-later-page.html',
  styles: ``,
})
export class WatchLaterPage implements OnInit {
  watchLater$!: Observable<ICourse[]>;

  constructor(private watchLaterService: WatchLaterService) {}

  ngOnInit(): void {
    this.watchLaterService.getWatchLaterList();
    this.watchLater$ = this.watchLaterService.watchLater$;
    // console.log(this.watchLater);
  }
}
