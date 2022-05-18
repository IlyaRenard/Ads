
export class Ad {
    id?: string;
    uid?: string;
    title?: string;
    description?: string;
    photoUrl?: string;
    price?: number;
    location?: string;
    date?: string;

    category?: string;

    typeRealty?: string;
    typeDeal?: string;
    typeHouse?: string;
    countRooms?: number;
    typeCommercial?: string;
    landArea?: number;
    totalArea?: number;
    livingSpace?: number;
    floor?: number;
    floorsHouse?: number;
    yearConstraction?: number;

    typeComputer?:string;
    producer?:string;
    screenDiagonal?:number;
    operatingSystem?:string;
    cpu?:string;
    clockFrequency?:number;
    ram?:number;
    gpyType?:string;
    gpu?:string;
    storageType?:string;
    storageCapacity?:number;
    componentType?:string;
    condition?:string;


    constructor(
        id?: string,
        uid?: string,
        title?: string,
        description?: string,
        photoUrl?: string,
        price?: number,
        location?: string,
        date?: string,

        category?: string,

    ) {
        this.uid = uid || '';
        this.title = title || '';
        this.description = description || '';
        this.photoUrl = photoUrl || '';
        this.price = price || 0;
        this.location = location || '';
        this.date = date || '';

        this.category = category || '';

       

    }
}