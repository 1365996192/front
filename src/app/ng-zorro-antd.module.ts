
import { NzTableModule } from 'ng-zorro-antd/table'; 
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NgModule } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

@NgModule({
  exports: [
    NzMenuModule,
    NzTableModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzSelectModule,
    NzPageHeaderModule
  ]
})
export class DemoNgZorroAntdModule {

}
