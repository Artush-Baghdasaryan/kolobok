export interface GroupDto {
  name: string;
  description: string;
  image: string | null;
  createdDate: Date | null;
  rating: number | null;
  accessType: AccessType;
}

export interface GroupBackendDto extends GroupDto {
  id: number;
}

export enum AccessType {
  Public,
  Private,
  ForSale
}
