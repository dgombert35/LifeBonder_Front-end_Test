export interface ChoiceMenu {
    name:string,
    link:string
}


export const MenuListConst: ChoiceMenu[] = [
    { name: 'choiceMenu.home', link: 'choiceMenu.toHome' },
    { name: 'choiceMenu.idea', link: 'choiceMenu.toIdea' },
    { name: 'choiceMenu.features', link: 'choiceMenu.toFeatures' },
    { name: 'choiceMenu.mission', link: 'choiceMenu.toMission' },
    { name: 'choiceMenu.careers', link: 'choiceMenu.toCareers' },
    { name: 'choiceMenu.blog', link: 'choiceMenu.toBlog' },
    { name: 'choiceMenu.press', link: 'choiceMenu.toPress' },
    { name: 'choiceMenu.team', link: 'choiceMenu.toTeam' },
    { name: 'choiceMenu.joinUs', link: 'choiceMenu.toJoinUs' },
];
