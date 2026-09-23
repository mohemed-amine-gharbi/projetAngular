import { Injectable } from '@angular/core';
import { MemberModel } from '../Models/MemberModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root', // injectable sur toute la route de l'application
})
//decorateur qui declare que le service accepte 
//detre injecte dans in composant ou das un autre service 

export class MemberService {

  constructor(private http: HttpClient) { } // injection de dependance du service HttpClient

  //les fonction qui gener des requetes http 
  //get post delete patch put 
  
  getAllMembers() {
  
    return this.http.get<MemberModel[]>('http://localhost:3000/members');

  }
  addMember(m: MemberModel) {
    return this.http.post<void>('http://localhost:3000/members', m);
  }
  deleteMember(id: String) {
    return this.http.delete<void>(`http://localhost:3000/members/${id}`);
  }
  editMember(id: String, m: MemberModel) {
    return this.http.put<void>(`http://localhost:3000/members/${id}`, m);
  }
}
