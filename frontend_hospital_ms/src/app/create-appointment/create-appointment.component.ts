import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrl: './create-appointment.component.css'
})
export class CreateAppointmentComponent {

appointment: Appointment= new Appointment();

constructor(private appointmentService: AppointmentService, private router: Router, private authService: AuthService)
{

}
saveAppointment(){
  this.appointmentService.createAppointment(this.appointment).subscribe(data=>{
    console.log(data);
    this.goToAppointment();
  })
}


  onSubmit(){
     this.saveAppointment();
  }

  goToAppointment(){
    this.router.navigate(['/appointmentlist']);
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['home']);
  }

}
