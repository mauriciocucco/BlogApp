import { NgModule } from '@angular/core';

import { ContactRoutingModule } from './contact-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [ContactRoutingModule, SharedModule],
})
export class ContactModule {}
