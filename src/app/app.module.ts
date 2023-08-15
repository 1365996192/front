import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // <-- NgModel lives here

//nz-date-picker的部分locale 来自于 Angular 自身的国际化支持，需要引入相应的 Angular 语言包
// 导入英文语言包
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';

// 创建注册界面虚拟后端接口： 在你的应用模块中，使用HttpClientInMemoryWebApiModule来创建一个虚拟的后端接口。你可以定义一个虚拟的数据集，以及对应的API路由。
import { InMemoryDataService } from './services/registerData.service';
// 创建注销界面虚拟后端接口
import { CancelDataService } from './services/cancel-data.service'; // 替换为实际的模拟数据服务路径


//导入组件库部分
// import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
//导入多个组件module
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
// 导入 NzMessageModule
import { NzMessageModule } from 'ng-zorro-antd/message';
// 导入 NzTableModule，以便在整个模块中使用 ng-zorro-antd 表格组件和功能。
import { NzTableModule } from 'ng-zorro-antd/table';

//导入组件
import { DataDisplayComponent } from './data-display/data-display.component';
import { NavigateMenuComponent } from './navigate-menu/navigate-menu.component';
import { RegisterCardComponent } from './register-card/register-card.component';
import { CancelCardComponent } from './cancel-card/cancel-card.component';


const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [
    AppComponent,
    DataDisplayComponent,
    NavigateMenuComponent,
    RegisterCardComponent,
    CancelCardComponent
  ],
  //这里放组件，然后其他文件从这个module.ts来引入？用了generate的话这里会自动添加
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 }),//注册界面模拟数据
    BrowserAnimationsModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule,
    NzTableModule, // 确保已添加 NzTableModule 到 imports 数组中
    NzMessageModule, // 添加 NzMessageModule 到 imports 数组中
  ],
  // providers: [{ provide: NZ_ICONS, useValue: icons }],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
