export interface Member {
    localisation:string,
    img:string,
    name:string,
    title:string,
    subtitle:string,
    description:string
}

export const MemberList: Member[] = [{
        localisation:'member.localisationMemberOne',
        img:'member.imgMemberOne',
        name:'member.nameMemberOne',
        title:'member.titleMemberOne',
        subtitle:'member.subtitleMemberOne',
        description:'member.descriptionMemberOne'
    },
    {
        localisation:'member.localisationMemberTwo',
        img:'member.imgMemberTwo',
        name:'member.nameMemberTwo',
        title:'member.titleMemberTwo',
        subtitle:'member.subtitleMemberTwo',
        description:'member.descriptionMemberTwo'
   }
];