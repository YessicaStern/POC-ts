type Service ={
    id:number,
    name:string,
    price:number
};
type ServiceOrEmpty = Partial<Service>;
type User = {
    id: number,
    name: string,
    cell: number
};
export{ Service, ServiceOrEmpty, User }