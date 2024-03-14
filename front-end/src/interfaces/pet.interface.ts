export interface PetCreate {
    name: string;
    age: Date;
    breed:string;
    weight: number;
    category: string;
    description: string;
    images: string | string[];
    userId: string;
}