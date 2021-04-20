import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
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
import { GatewayListComponent } from './gateway-list/gateway-list.component';
import { TemplateListComponent } from './template-list/template-list.component';
import { GatewaysComponent } from './gateways/gateways.component';
import { AddtemplateComponent } from './addtemplate/addtemplate.component';
import { EscalationMatrixComponent } from './escalation-matrix/escalation-matrix.component';
import { GatwaysStatusComponent } from './gatways-status/gatways-status.component';
import { AddUserEsclationComponent } from './add-user-esclation/add-user-esclation.component';
import { AddNewUserEsclationComponent } from './add-new-user-esclation/add-new-user-esclation.component';
import { NotificationManagerComponent } from './notification-manager/notification-manager.component';
import { SmsManagerComponent } from './sms-manager/sms-manager.component';
import { AddSmsManagerComponent } from './add-sms-manager/add-sms-manager.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationDetailsComponent } from './notification-details/notification-details.component';
import { CommandSettingComponent } from './command-setting/command-setting.component';
import { PortSettingComponent } from './port-setting/port-setting.component';
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
import { EnergyMeterComponent } from './energy-meter/energy-meter.component';
import { AddenergyMeterComponent } from './addenergy-meter/addenergy-meter.component';
import { ViewenergyComponent } from './viewenergy/viewenergy.component';
import { SecondryGatewayComponent } from './secondry-gateway/secondry-gateway.component';
import { SmartMeterComponent } from './smart-meter/smart-meter.component';
import { ViewSmsManagerComponent } from './view-sms-manager/view-sms-manager.component';
import { AddSmartMeterComponent } from './add-smart-meter/add-smart-meter.component';
import { EditSmsManagerComponent } from './edit-sms-manager/edit-sms-manager.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { FeaturesComponent } from './features/features.component';
import { AddfeaturesComponent } from './addfeatures/addfeatures.component';
import { EditfeaturesComponent } from './editfeatures/editfeatures.component';
import { ViewfeaturesComponent } from './viewfeatures/viewfeatures.component';
import { AuthGuard } from './keycloak.guard'
import { ViewrolemodulemappingComponent } from './viewrolemodulemapping/viewrolemodulemapping.component';
import { AddsubModuleComponent } from './addsub-module/addsub-module.component';
import { ErrorComponent } from './error/error.component';
import { EditrouterComponent } from './editrouter/editrouter.component';
import { EditenergyMeterComponent } from './editenergy-meter/editenergy-meter.component';
import { AddvideogatewayComponent } from './addvideogateway/addvideogateway.component';
import { VideogatewayComponent } from './videogateway/videogateway.component';
import { ViewvideogatewayComponent } from './viewvideogateway/viewvideogateway.component';
import { HealthDashComponent } from './health-dash/health-dash.component';
 
const routes: Routes =[{
  path:'',redirectTo: 'kochar/profile', pathMatch: 'full'  , canActivate:[AuthGuard]
}
,{
  path:'kochar',component: WelcomeComponent,children:  [
    {path:'profile',component: ProfileComponent},
    {path:'Users',component: UserComponent},
    {path:'Business',component: UserComponent},
    {path:'adduser',component: AddUserComponent},
    {path:'Devices',component: ZoneDeviceComponent},
    {path:'Features',component: FeaturesComponent},
    {path:'addfeatures',component: AddfeaturesComponent},
    {path:'editfeatures/:id',component: EditfeaturesComponent},
    {path:'viewfeatures/:id',component: ViewfeaturesComponent},
    {path:'addsubmodule',component: AddsubModuleComponent},
    {path:'Router/:idz/:id',component: RoutersComponent},
    {path:'addrouter/:id',component: AddrouterComponent},
    {path:'Energy/:idz/:id',component: EnergyMeterComponent},
    {path:'addenergy/:id',component: AddenergyMeterComponent},
    {path:'openrouter/:id',component: RouterDetailComponent},
    {path:'devicelist/:idz/:id',component: DeviceComponent},
    {path:'Health Dashboard',component: HealthDashComponent},
    {path:'Energy Management/Secondary Gateway',component: SecondryGatewayComponent},
    {path:'Energy Management/Smartmeter',component: SmartMeterComponent},
    {path:'IOT Gateway',component: IotGatewayDashComponent,children:  [
      {path:'Zones',component: ZoneDeviceComponent},
      {path:'Templates',component: TemplateListComponent},
      {path:'Gateway',component: GatewaysComponent},
      {path:'SMS Manager',component: SmsManagerComponent},
      {path:'Notification Manager',component: NotificationManagerComponent},
     ]},
     {path:'Escalation Matrix',component: EscalationMatrixComponent},
     {path:'adduserescalation/:id',component:AddUserEsclationComponent},
     {path:'addnewuserescalation',component:AddNewUserEsclationComponent},
     {path:'analysis/:id/:mac',component: RouterAnalysisComponent},
     {path:'Locations/:id/:da',component: LocationComponent},
     {path:'port_set/:data',component: PortSettingComponent},
     {path:'addgateway/:idz/:id',component: AddlocationComponent},
     {path:'addnewlocation/:id',component: AddnewlocationComponent},
     {path:'GatewayList/:idz/:id',component: GatewayListComponent},
     {path:'addtemplate',component: AddtemplateComponent},
     {path:'addsmssetting',component: AddSmsManagerComponent},
     {path: 'Notifications',component:NotificationComponent},
     {path: 'notification-details/:id/:cli',component:NotificationDetailsComponent},
    {path:'Modules',component: ModuleComponent},
    {path:'addmodule',component: AddmoduleComponent},
    {path:'Left Menu',component: RoleModuleMappingComponent},
    {path:'addRoleModuleMappings',component: AddroleModuleMappingComponent},
    {path:'Roles',component: RolesComponent},
    {path:'Zones',component: ZoneComponent},
    {path:'addzone',component: AddzoneComponent},
    {path:'addrole',component: AddroleComponent},
    {path:'viewzone/:id',component: ViewZoneComponent},
    {path:'editzone/:id',component: EditZoneComponent},
    {path:'edituser/:id',component: EditUserComponent},
    {path:'viewuser/:id',component: ViewUserComponent},
    {path:'edittemplate/:id',component:EditTemplateComponent},
    {path:'editrole/:id',component:EditRoleComponent},
    {path:'viewtemplate/:id',component:ViewTemplateComponent},
    {path:'viewrole/:id',component:ViewRoleComponent},
    {path:'viewenergy/:id',component:ViewenergyComponent},
    {path:'viewsmssetting/:id',component:ViewSmsManagerComponent},
    {path:'addsmartmeter/:id',component:AddSmartMeterComponent},
    {path:'editsmartmeter/:id',component:EditSmsManagerComponent},
    {path:'viewrolemodulemapping/:id',component:ViewrolemodulemappingComponent},
    {path:'editrouter/:id',component:EditrouterComponent},
    {path:'editenergymeter/:id',component:EditenergyMeterComponent},

    {path:'addvideogateway/:idz/:id',component:AddvideogatewayComponent},
    {path:'Video/:idz/:id',component:VideogatewayComponent},
    {path:'viewvideo/:id',component: ViewvideogatewayComponent},

    

    

    
   ]  , canActivate:[AuthGuard]
  },{
    path: '**',
    component: ErrorComponent
  }
  ]



@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }


//, canActivate:[AuthGuard]