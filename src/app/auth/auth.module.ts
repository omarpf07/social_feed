import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SharedModule } from '../shared/shared.module';
import { DependencyModule } from './dependency/dependency.module';
import { SocialButtonComponent } from './components/social-button/social-button.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, SocialButtonComponent],
  imports: [AuthRoutingModule, SharedModule, DependencyModule],
})
export class AuthModule {}
