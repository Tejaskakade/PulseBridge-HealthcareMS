import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrl: './docdash.component.css'
})
export class DocdashComponent {

    constructor(private patientService : PatientService, private router: Router, private docauthService: DocauthService, private authService:AuthService){}
  

    patients: Patient[] = [];

    ngOnInit():void{
      this.getPatients();
    }
  
    getPatients(){

      this.patientService.getPatientList().subscribe(data =>{
        this.patients=data;
      })

    }

    update(id:number){
      this.router.navigate(['update-patient',id]);

    }

    // delete(id:number){

    //   this.patientService.delete(id).subscribe(data=>{
    //     console.log(data);
    //     this.getPatients();
    //   })

    // }

    delete(id: number): void {
      const confirmation = confirm('Are you sure you want to delete this patient?');
      
      if (confirmation) {
        this.patientService.delete(id).subscribe(
          (data) => {
            console.log('Patient deleted:', data);
            this.getPatients();
            alert('Patient deleted successfully!');
          },
          (error) => {
            console.error('Error deleting patient:', error);
            alert('Failed to delete the patient. Please try again.');
          }
        );
      }
    }
    
    view(id:number){

      this.router.navigate(['view-patient',id]);

    }


    logout(){
      this.authService.logout();
      this.router.navigate(['home']);
    }
  
}
