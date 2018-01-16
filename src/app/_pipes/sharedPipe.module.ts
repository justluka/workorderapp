import { NgModule } from '@angular/core';

// containers
import { SearchPipe } from './search.pipe';

// routes

 
@NgModule({
  imports: [],
  declarations: [SearchPipe],
  exports:[SearchPipe]
})
export class SharedPipeModule {}