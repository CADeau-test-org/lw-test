
export type myAnimal = {
    id: number;
    name: string;
    src: string;
    alt: string;
    width: number;
    height: number;
}

export const animals: myAnimal[] = [
    {
        id: 1,
        name: "Mike",
        src: "/Mike.jpg",
        alt: "dog 1 pic",
        width: 400,
        height: 530
    },
    {
        id: 2,
        name: "Jerry",
        src: "/jerry.jpg",
        alt: "cat 1 pic",
        width: 400,
        height: 450,
    } ,
    {
        id: 3,
        name: "Tom",
        src: "/tom.jpg",
        alt: "dog 3 pic",
        width: 400,
        height: 500
    },
    {
        id: 4,
        name: "Mimi",
        src: "/mimi.jpg",
        alt: "cat 2 pic",
        width: 400,
        height: 400
    },
    {
        id: 5,
        name: "Lili",
        src: "/lili.jpg",
        alt: "cat 3 pic",
        width: 400,
        height: 500
    },
    {
        id: 6,
        name: "Zac",
        src: "/zac.jpg",
        alt: "dog 2 pic",
        width: 400,
        height: 560
    }
]