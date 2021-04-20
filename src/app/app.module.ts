import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import {BackendconnectionService} from "./backendconnection.service";
import {SocketioService} from "./socketio.service";
import {SocketioSendmsgService} from "./socketio-sendmsg.service";
import { CommandSettingComponent } from './command-setting/command-setting.component';
import { PortSettingComponent } from './port-setting/port-setting.component';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { MomentModule } from 'angular2-moment'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { AddUserComponent } from './add-user/add-user.component';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import { DeviceComponent } from './device/device.component';
import { RolesComponent } from './roles/roles.component';
import { AddroleComponent } from './addrole/addrole.component';
import { ModuleComponent } from './module/module.component';
import { AddmoduleComponent } from './addmodule/addmodule.component';
import { RoleModuleMappingComponent } from './role-module-mapping/role-module-mapping.component';
import { AddroleModuleMappingComponent } from './addrole-module-mapping/addrole-module-mapping.component';
import { ZoneComponent } from './zone/zone.component';
import { AddzoneComponent } from './addzone/addzone.component';
import { LocationComponent } from './location/location.component';
import { AddlocationComponent } from './addlocation/addlocation.component';
import { ZoneDeviceComponent } from './zone-device/zone-device.component';
import { IotGatewayDashComponent } from './iot-gateway-dash/iot-gateway-dash.component';
import {MatRadioModule} from '@angular/material/radio';
import { GatewayListComponent } from './gateway-list/gateway-list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { TemplateListComponent } from './template-list/template-list.component';
import { GatewaysComponent } from './gateways/gateways.component';
import { AddtemplateComponent } from './addtemplate/addtemplate.component';
import { EscalationMatrixComponent } from './escalation-matrix/escalation-matrix.component';
import { GatwaysStatusComponent } from './gatways-status/gatways-status.component';
import {MatDialogModule,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EscalationDetailsComponent } from './escalation-details/escalation-details.component';
import { AddUserEsclationComponent } from './add-user-esclation/add-user-esclation.component';
import { AddNewUserEsclationComponent } from './add-new-user-esclation/add-new-user-esclation.component';
import { NotificationManagerComponent } from './notification-manager/notification-manager.component';
import { SmsManagerComponent } from './sms-manager/sms-manager.component';
import { AddSmsManagerComponent } from './add-sms-manager/add-sms-manager.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationDetailsComponent } from './notification-details/notification-details.component';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SimpleNotificationsModule } from 'angular2-notifications';
import {MatBadgeModule} from '@angular/material/badge';
import { RoutersComponent } from './routers/routers.component';
import { AddrouterComponent } from './addrouter/addrouter.component';
import { ViewZoneComponent } from './view-zone/view-zone.component';
import { EditZoneComponent } from './edit-zone/edit-zone.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ViewTemplateComponent } from './view-template/view-template.component';
import { EditTemplateComponent } from './edit-template/edit-template.component';
import { RouterDetailComponent } from './router-detail/router-detail.component';
import { AddnewlocationComponent } from './addnewlocation/addnewlocation.component';
import { RouterAnalysisComponent } from './router-analysis/router-analysis.component';
import { ViewRoleComponent } from './view-role/view-role.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { EnergyMeterComponent } from './energy-meter/energy-meter.component';
import { AddenergyMeterComponent } from './addenergy-meter/addenergy-meter.component';
import { ViewenergyComponent } from './viewenergy/viewenergy.component';
import { SecondryGatewayComponent } from './secondry-gateway/secondry-gateway.component';
import { SmartMeterComponent } from './smart-meter/smart-meter.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ViewSmsManagerComponent } from './view-sms-manager/view-sms-manager.component';
import { AddSmartMeterComponent } from './add-smart-meter/add-smart-meter.component';
import { EditSmsManagerComponent } from './edit-sms-manager/edit-sms-manager.component';
import { CommandSettingMeterComponent } from './command-setting-meter/command-setting-meter.component';
import { CommandSettingSmartmeterComponent } from './command-setting-smartmeter/command-setting-smartmeter.component';
import { FeaturesComponent } from './features/features.component';
import { AddfeaturesComponent } from './addfeatures/addfeatures.component';
import { EditfeaturesComponent } from './editfeatures/editfeatures.component';
import { ViewfeaturesComponent } from './viewfeatures/viewfeatures.component';
 
import { APP_INITIALIZER } from '@angular/core';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { ViewrolemodulemappingComponent } from './viewrolemodulemapping/viewrolemodulemapping.component';
import { AddsubModuleComponent } from './addsub-module/addsub-module.component';
import { ErrorComponent } from './error/error.component';
import { EditrouterComponent } from './editrouter/editrouter.component';
import { EditenergyMeterComponent } from './editenergy-meter/editenergy-meter.component';
import { VideogatewayComponent } from './videogateway/videogateway.component';
import { AddvideogatewayComponent } from './addvideogateway/addvideogateway.component';
import { ViewvideogatewayComponent } from './viewvideogateway/viewvideogateway.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CameraModalComponent } from './camera-modal/camera-modal.component';
import { GetallrecordModalComponent } from './getallrecord-modal/getallrecord-modal.component';
import { HealthDashComponent } from './health-dash/health-dash.component';
import { DetailsModalComponent } from './details-modal/details-modal.component';
// import { HashLocationStrategy, LocationStrategy  } from '@angular/common';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://202.164.38.204:9002/auth',
        realm: 'TestIOT',
        clientId: 'test-client1',
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
        checkLoginIframe: false

      },
    });
}

const customNotifierOptions: NotifierOptions = {
  position: {
		horizontal: {
			position: 'right',
			distance: 12
		},
		vertical: {
			position: 'bottom',
			distance: 12,
			gap: 10
		}
	},
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: false,
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 10
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    SidebarComponent,
    ProfileComponent,
    UserComponent,
    AddUserComponent,
    DeviceComponent,
    RolesComponent,
    AddroleComponent,
    ModuleComponent,
    AddmoduleComponent,
    RoleModuleMappingComponent,
    AddroleModuleMappingComponent,
    ZoneComponent,
    AddzoneComponent,
    LocationComponent,
    AddlocationComponent,
    ZoneDeviceComponent,
    IotGatewayDashComponent,
    GatewayListComponent,
    TemplateListComponent,
    GatewaysComponent,
    AddtemplateComponent,
    EscalationMatrixComponent,
    GatwaysStatusComponent,
    EscalationDetailsComponent,
    AddUserEsclationComponent,
    AddNewUserEsclationComponent,
    NotificationManagerComponent,
    SmsManagerComponent,
    AddSmsManagerComponent,
    NotificationComponent,
    NotificationDetailsComponent,
    CommandSettingComponent,
    PortSettingComponent,
    RoutersComponent,
    AddrouterComponent,
    ViewZoneComponent,
    EditZoneComponent,
    EditUserComponent,
    ViewUserComponent,
    ViewTemplateComponent,
    EditTemplateComponent,
    RouterDetailComponent,
    AddnewlocationComponent,
    RouterAnalysisComponent,
    ViewRoleComponent,
    EditRoleComponent,
    EnergyMeterComponent,
    AddenergyMeterComponent,
    ViewenergyComponent,
    SecondryGatewayComponent,
    SmartMeterComponent,
    ViewSmsManagerComponent,
    AddSmartMeterComponent,
    EditSmsManagerComponent,
    CommandSettingMeterComponent,
    CommandSettingSmartmeterComponent,
    FeaturesComponent,
    AddfeaturesComponent,
    EditfeaturesComponent,
    ViewfeaturesComponent,
    ViewrolemodulemappingComponent,
    AddsubModuleComponent,
    ErrorComponent,
    EditrouterComponent,
    EditenergyMeterComponent,
    VideogatewayComponent,
    AddvideogatewayComponent,
    ViewvideogatewayComponent,
    CameraModalComponent,
    GetallrecordModalComponent,
    HealthDashComponent,
    DetailsModalComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // material //
    MatCheckboxModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatCardModule,
    KeycloakAngularModule,
    MatSelectModule,
    NgIdleKeepaliveModule.forRoot(),
    MomentModule,
    FontAwesomeModule,MatTabsModule,
    MatRadioModule,
    MatExpansionModule,
    MatDialogModule,
    MatSnackBarModule,    
    SimpleNotificationsModule.forRoot(),
    NotifierModule.withConfig(customNotifierOptions),
     MatBadgeModule,
     MatSlideToggleModule,
     MatDatepickerModule,
     MatNativeDateModule
  ],
  providers: [BackendconnectionService,SocketioService,SocketioSendmsgService,
    // {provide : LocationStrategy , useClass: HashLocationStrategy},
    {
    provide: MatDialogRef,
    useValue: {}
    },
    {
    provide: MAT_DIALOG_DATA,
    useValue: {}
  
   },
   {
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService],
   },
  
],
  bootstrap: [AppComponent],
  entryComponents:[EscalationDetailsComponent],

})
export class AppModule { }
