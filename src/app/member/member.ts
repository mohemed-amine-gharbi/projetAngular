import { Component, OnInit } from '@angular/core';
import { MemberModel } from '../../Models/MemberModel';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MemberService } from '../../services/member-service';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { ConfirmeDialog } from '../confirme-dialog/confirme-dialog';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-member',
  imports: [CommonModule,MatTableModule,MatIconModule,RouterLink,MatDialogModule,ConfirmeDialog],
  templateUrl: './member.html',
  styleUrl: './member.css',
})
export class Member implements OnInit {

  
 // dataSource:MemberModel[] = [];
  displayedColumns: string[] = ['id', 'cin', 'name', 'type', 'created','5'];

    //saisir le tableau des members
    dataSource: any[] = [];
    // injection de dependance 
    constructor(private MS: MemberService, private dialog: MatDialog) { }

  ngOnInit() {
    this.MS.getAllMembers().subscribe((response) => {
      this.dataSource = response;
    });

  }

  editMember(id: String) {
    // Naviguer vers la page de modification du membre avec l'ID du membre
    // Vous pouvez utiliser le Router pour naviguer vers une autre page
    // Par exemple : this.router.navigate(['/edit-member', id]);
  }
deleteMember(id: String) {

  let dialogRef = this.dialog.open(ConfirmeDialog, {
  //height: '400px',
  //width: '600px',
});

dialogRef.afterClosed().subscribe(result => {
  if (result) {
    // L'utilisateur a confirmé la suppression
    this.MS.deleteMember(id).subscribe(() => {
      this.ngOnInit(); // Recharger la liste des membres après la suppression
      // Vous pouvez également afficher un message de succès ou effectuer d'autres actions après la suppression
    });
  }
});
  
  
 
}

    
}
