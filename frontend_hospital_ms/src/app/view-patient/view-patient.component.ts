import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrl: './view-patient.component.css'
})
export class ViewPatientComponent {

  id:number = 0;
  patient:Patient= new Patient();
  constructor(private patientService: PatientService, private route: ActivatedRoute, private authService: AuthService,private router : Router){

  }

  ngOnInit():void{
    this.id=this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(data=>{
    this.patient = data;
    })
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['home']);
  }

  goBack(): void {
    this.router.navigate(['/docdash']); // Navigate to dashboard or previous page
  }

}
