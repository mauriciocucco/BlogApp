import { NgModule } from '@angular/core';

import { ArticlesRoutingModule } from './articles-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [ArticlesRoutingModule, SharedModule],
})
export class ArticlesModule {}
