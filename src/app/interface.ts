export interface myObj{
    mickyImgs(mickyImgs: any): string
    title: any
    
    id:number,
    createdby:string,
    name:string,
    createddate:string
    imageurl:string,
    description:string,
    priority:string
}

export interface mainObj{
    title: any
    id:number,
    createdby:string,
    name:string,
    createddate:string
    imageurl:string,
    description:string,
    priority:string,
    mickyImgs:myObj[]
    

}