export type User = {
    id: number,
    name: string,
    email: string,
    address: {
        city: string,
        street: string,
        suite: string,
        zipcode: string
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

export type UserDetails = {
    username: string,
    password: string
}


export type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}