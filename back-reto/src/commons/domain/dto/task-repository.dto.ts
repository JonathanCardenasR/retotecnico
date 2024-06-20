export interface ITaskRepositoryDto {
  name: string;
  state: boolean;
  userId: number;
}

export interface IGetTaskRepositoryDto extends ITaskRepositoryDto {
  id: number;
}
