export interface Product{
    // [x: string]: any;
    id?: number;
    GName?:string;
    imgGame?:string;
    Price?:number;
    detail?:string;
    UserName?:string;
    email?: string;
    facebook?:string;
    tel?:string;
    
    date?: number;
    status?:boolean; 
}

export interface Game{
    id?: number;
    gName?:string;
    gVersion?:string;
    gIcon?:string;
    gRecommend?:string;
}

export interface Contact{
    id?: number;
    username?:string;
    email?: string;
    message?:string;
}