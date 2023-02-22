export interface myObj{
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
    id:number,
    createdby:string,
    name:string,
    createddate:string
    imageurl:string,
    description:string,
    priority:string,
    mickyImgs:myObj[]
    

}