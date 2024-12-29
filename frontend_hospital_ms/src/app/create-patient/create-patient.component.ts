import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrl: './create-patient.component.css'
})
export class CreatePatientComponent {

  patient:Patient= new Patient();

  constructor(private patientService:PatientService, private router:Router, private authService:AuthService){

  }

  savePatient(){

    
    this.patientService.createPatient(this.patient).subscribe(data=>{
      console.log(data);
      this.goToPatientList();

    })

  }

  onSubmit(patientForm: any){

    this.savePatient();

  }

  goToPatientList(){
    this.router.navigate(['/docdash']);
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['home']);
  }

  cancel(): void {
    this.router.navigate(['/docdash']); // Navigate back to the dashboard
  }

}
