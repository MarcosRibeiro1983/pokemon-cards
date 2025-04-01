export type Pokemon = {
    name: string;
    id: string;
    url: string;
    sprites: {
        front_default: string;
    };
    types: {
        slot: number,
        type: {
            name: string;
            url: string;
        }
    }[];

}