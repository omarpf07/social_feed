import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {
  HomeFill,
  ApartmentOutline,
  LogoutOutline,
} from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [HomeFill, ApartmentOutline, LogoutOutline];

@NgModule({
  declarations: [],
  imports: [
    NzLayoutModule,
    NzMenuModule,
    NzIconModule.forChild(icons),
    NzButtonModule,
  ],
  exports: [NzLayoutModule, NzMenuModule, NzButtonModule],
})
export class DependencyModule {}
