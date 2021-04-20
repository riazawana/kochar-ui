import { Component, OnInit,ViewChild ,Inject} from '@angular/core';
import { BackendconnectionService } from '../backendconnection.service';
import {Router,ActivatedRoute} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { GetallrecordModalComponent } from '../getallrecord-modal/getallrecord-modal.component';  
import { CameraModalComponent } from '../camera-modal/camera-modal.component';         
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface CameraData {
  camera_status: string;
  name: string;
  type: string;
  footage: string;
  get: string;
  live:any;
}
declare const Hls: any;
@Component({
  selector: 'app-viewvideogateway',
  templateUrl: './viewvideogateway.component.html',
  styleUrls: ['./viewvideogateway.component.css']
})



export class ViewvideogatewayComponent implements OnInit {

  constructor(
    private backend:BackendconnectionService,
    private route: ActivatedRoute,
    private router:Router,
    private dialog: MatDialog,
    private dialog2: MatDialog,

    public dialogRef: MatDialogRef<ViewvideogatewayComponent>,
    public dialogRef2: MatDialogRef<ViewvideogatewayComponent>,

    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  displayedColumns: string[] = ['camera_status', 'name', 'type','footage', 'live', 'get'];
  dataSource: MatTableDataSource<CameraData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  

  cameras:any;
  id:any;
  zero:any;
  mac_id:any;
  start:any=[];
  end:any=[];
  ft:any = [];

  openDialog(x,y,z,e): void {
     const dialogRef = this.dialog.open(GetallrecordModalComponent, {
       data: {mac: x,start:y,end:z,id:e}    
     },
     );

     dialogRef.afterClosed().subscribe(result => {
     });
   }

   getlivefeed(x){
    const dialogRef2 = this.dialog2.open(CameraModalComponent, {
      data: {url: x,isRecording:false}    
    },
    );

    dialogRef2.afterClosed().subscribe(result => {
    });
  }
  
onNoClick2(): void {
    this.dialogRef2.close();
  }
   onNoClick(): void {
    this.dialogRef.close();
  }
  

  ngOnInit(): void {


    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      })
     
      
    this.backend.getvideogateways(this.id)
    .subscribe((data)=> { 
      // console.log("User Data",data);
       this.mac_id = data['data'][0].mac_id;


    });

    this.backend.getchannelinfo(this.id)
    .subscribe((data)=> { 
      // console.log("User Data",data);
       this.cameras = data["data"].channel_info;
       for(var i = 0; i<this.cameras.length; i++){
          this.ft.push('');
       }

      this.dataSource = new MatTableDataSource(this.cameras);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;


    });

    this.backend.getChannelZero(this.id)
    .subscribe((data)=> { 
      // console.log("User Data",data);
       //this.user = data['data'];
       this.zero = data['data'].data;


    });

  setInterval(()=>{
    this.allcamera = this.backend.cam_list ;
    // console.log(this.allcamera);
  },1000)
  
  }

  allcamera:any;
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
 
  
  
  zerobtn(x){
    // alert(x);
  }

  footage_ret(x,y,z){
  
    this.backend.footageretention(x,y)
    .subscribe((data)=> { 
      // console.log("Data",data);
      this.ft[z] = data["data"];

    });
  }


  delete(x){
    // alert(x)
  }
  

  






}














