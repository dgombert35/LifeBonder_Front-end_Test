import { Injectable } from "@angular/core";
import { ChoiceMenu, MenuListConst } from '../models/choiceMenu.model';
import { SocialNetwork, SocialNetworkForMember } from '../models/socialNetworksIcon.model';
import { MemberList, Member } from '../models/member.model';




@Injectable({
    providedIn: 'root'
})

export class ObjectsService {

    getMenuList(): ChoiceMenu[]{
        return MenuListConst;
    }

    getSocialNetworkMembersList(): SocialNetwork[]{
        return SocialNetworkForMember;
    }

    getMemberList(): Member[]{
       return MemberList;
    }

}