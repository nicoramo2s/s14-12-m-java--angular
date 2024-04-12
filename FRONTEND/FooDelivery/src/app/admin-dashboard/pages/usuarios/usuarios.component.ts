import {ChangeDetectionStrategy, Component, computed, inject, OnInit, signal} from '@angular/core';
import {UsersTableAdminDashboardComponent} from "./components/users-table/users-table.component";
import {JsonPipe, TitleCasePipe} from "@angular/common";
import {UserService} from "./services/user.service";
import {IUser} from "../../../core/interfaces/user/User.interface";
import {Router} from "@angular/router";
import {tap} from "rxjs/operators";
import {DashboardTableType} from "../../interfaces/dashboard-table.enum";

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [
    UsersTableAdminDashboardComponent,
    TitleCasePipe,
    JsonPipe
  ],
  templateUrl: './usuarios.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsuariosComponent {
  userService = inject(UserService);

  subtitle = signal('Usuarios');


  protected readonly DashboardTableType = DashboardTableType;
}