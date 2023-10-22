export interface IAnalyzeDto {
    documentId: number, 
    groupId: number,
    language: Language
}

export enum Language {
    Rus,
    Eng
}