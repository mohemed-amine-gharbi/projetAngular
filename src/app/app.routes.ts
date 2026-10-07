import { Routes } from '@angular/router';
import { MemberForm } from './member-form/member-form';
import { Member } from './member/member';
import { Dashboard } from './dashboard/dashboard';
import { Tools } from './tools/tools';
import { Articles } from './articles/articles';
import { Events } from './events/events';
import { Login } from './login/login';

export const routes: Routes = [
    {
        path: 'login',
        component: Login
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'

    },
    {
        path: 'create',
    component :MemberForm
    },
    {
        path: 'edit/:id', //:id => parametre dynamique
    component :MemberForm
    },
    {
        path: 'member',
        component :Member
        
    },

    {
        path: 'dashboard',
        component: Dashboard,
    },
    {
        path: 'tools',
        component: Tools,
    },
    {
        path: 'articles',
        component: Articles,
    },
    {
        path: 'events',
        component: Events,
    }
    
];
