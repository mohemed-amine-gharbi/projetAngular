import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MemberService } from '../../services/member-service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-member-form',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule,FormsModule,ReactiveFormsModule],
  templateUrl: './member-form.html',
  styleUrl: './member-form.css',
})
export class MemberForm implements OnInit {
  //injection de dependance du service MemberService pour envoyer les données vers le backend
  constructor(private MS: MemberService ,private router: Router , private route: ActivatedRoute ) { }
  form !: FormGroup; idCourant !: String;
  ngOnInit() //pour inistialiser le from avec ses attributs null
  
  {
    this.idCourant = this.route.snapshot.params['id'];
    if (this.idCourant ){

      this.MS.getMemberById(this.idCourant).subscribe((data)=>{
        this.form=new FormGroup({
          cin : new FormControl(data.cin),
          name : new FormControl(data.name),
          type : new FormControl(data.type),
          created : new FormControl(data.created)
        });

    } );
  }

      else {


    
    this.form=new FormGroup({
      cin : new FormControl(null),
      name : new FormControl(null),
      type : new FormControl(null),
      created : new FormControl(null)

    });
      }
    

    //recuperer la route active 
    //chercher id 
    //si id existe => je suis edit 
                  //=>


  }
  sub(){


    console.log(this.form.value);
    //injecter le service pour envoyer les données vers le backend

    if (this.idCourant){
      this.MS.updateMember(this.idCourant,this.form.value).subscribe(()=>{
        this.router.navigate(['']);
      });
    }
    else {
    this.MS.addMember(this.form.value).subscribe(()=>{
      this.router.navigate(['']);
    });
  }
}


}
