export interface socialNetwork {
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

export const socialNetworkForMember = [{ 
    name:'Jesper',
    facebook:true,
    instagram:true,
    linkedin:true,
    github:false,
    linkedinLInk:'https://www.linkedin.com/in/jesper-simonsen-4092915/',
    facebooklink:'https://www.facebook.com/LifeBonder/',
    instagramLink:'https://www.instagram.com/lifebonder_'
}, 
{ 
    name:'Hasan',
    facebook:false,
    instagram:false,
    linkedin:true,
    github:true,
    linkedinLInk:'https://www.linkedin.com/in/mohammad-hasan-22452633',
    githubLink:'https://github.com/pori468'   
},
];