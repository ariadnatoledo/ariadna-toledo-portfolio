export interface IService {
    title: string,
    about: string,
}

export interface ISkill {
name: string,
level: string,

}

export interface IProject {
    name: string,
    description: string,
    image_path: string,
    deployed_url: string,
    GitHub_url: string,
    category: Category[],
    key_techs: string[],
}

export type Category = "react" | "node" | "express" | "MySQL" | "Next.js" | "TypeScript"