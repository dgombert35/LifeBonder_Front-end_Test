export interface SocialNetwork {
    name:string,
    facebook:boolean,
    instagram:boolean,
    linkedin:boolean,
    github:boolean,
    linkedinLInk?:string,
    facebooklink?:string,
    instagramLink?:string,
    githubLink?:string
}

export const SocialNetworkForMember: SocialNetwork[] = [{
    name:'socialNetworks.nameMemberOne',
    facebook:true,
    instagram:true,
    linkedin:true,
    github:false,
    linkedinLInk:'socialNetworks.linkeInLinkMemberOne',
    facebooklink:'socialNetworks.facebookLinkMemberOne',
    instagramLink:'socialNetworks.instagramLinkMemberOne'
},
{
    name:'socialNetworks.nameMemberTwo',
    facebook:false,
    instagram:false,
    linkedin:true,
    github:true,
    linkedinLInk:'socialNetworks.linkedInLinkMemberTwo',
    githubLink:'socialNetworks.githubLinkMemberTwo'
},
];