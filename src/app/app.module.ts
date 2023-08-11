import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // <-- NgModel lives here


//导入组件库部分
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
//导入多个组件module
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';

//导入组件
import { DataDisplayComponent } from './data-display/data-display.component';
import { NavigateMenuComponent } from './navigate-menu/navigate-menu.component';
import { RegisterCardComponent } from './register-card/register-card.component';
import { DataService } from './services/in-transactions-data.service';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [
    AppComponent,
    DataDisplayComponent,
    NavigateMenuComponent,
    RegisterCardComponent
  ],
  //这里放组件，然后其他文件从这个module.ts来引入？用了generate的话这里会自动添加
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService, { dataEncapsulation: false })
  ],
  providers: [{ provide: NZ_ICONS, useValue: icons }],
  bootstrap: [AppComponent]
})
export class AppModule { }
