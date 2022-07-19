import { NgModule } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
// Icons
import {
  UserOutline,
  LockOutline,
  GoogleSquareFill,
  FacebookFill,
  EyeInvisibleOutline,
  EyeOutline,
  MailOutline
} from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';

const icons: IconDefinition[] = [
  UserOutline,
  LockOutline,
  GoogleSquareFill,
  FacebookFill,
  EyeInvisibleOutline,
  EyeOutline,
  MailOutline
];

@NgModule({
  declarations: [],
  imports: [
    NzCardModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzDividerModule,
    NzIconModule.forChild(icons),
  ],
  exports: [
    NzCardModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzDividerModule,
  ],
})
export class DependencyModule {}
