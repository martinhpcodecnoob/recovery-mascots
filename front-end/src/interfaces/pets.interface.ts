export interface InterfacePetsUser {
    _id?:         string;
    name?:        string;
    age?:         string;
    breed?:       string;
    weight?:      number;
    category?:    string;
    description?: string;
    images?:      string[];
    status?:      string;
    userId?:      string;
}

export interface CreatePetsUserTSInput {
    name?:        string;
    age?:         string;
    breed?:       string;
    weight?:      number;
    category?:    string;
    description?: string;
    images?:      string[];
    status?:      string;
    userId?:      string;
}

export interface CreatePetsUserTSOutput {
    _id?:         string;
    name?:        string;
    age?:         string;
    breed?:       string;
    weight?:      number;
    category?:    string;
    description?: string;
    images?:      string[];
    status?:      string;
    userId?:      string;
}
