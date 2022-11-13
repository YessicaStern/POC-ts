type Service ={
    id:number,
    name:string,
    price:number
};
type ServiceOrEmpty = Partial<Service>;

export{ Service, ServiceOrEmpty }