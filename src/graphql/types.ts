import type * as Types from "./schema.types";

export type CreateTaskMutationVariables = Types.Exact<{
  input: Types.CreateOneTaskInput;
}>;

export type CreateTaskMutation = {
  createOneTask: Pick<
    Types.Task,
    | "id"
    | "title"
    | "description"
    | "dueDate"
    | "completed"
    | "stageId"
    | "createdAt"
    | "updatedAt"
  >;
};

export type UpdateTaskMutationVariables = Types.Exact<{
  input: Types.UpdateOneTaskInput;
}>;

export type UpdateTaskMutation = {
  updateOneTask: Pick<
    Types.Task,
    | "id"
    | "title"
    | "description"
    | "dueDate"
    | "completed"
    | "stageId"
    | "createdAt"
    | "updatedAt"
  >;
};

export type TasksListQueryVariables = Types.Exact<{
  paging: Types.OffsetPaging;
  filter?: Types.InputMaybe<Types.TaskFilter>;
  sorting: Array<Types.TaskSort> | Types.TaskSort;
}>;

export type TasksListQuery = {
  tasks: Pick<Types.TaskConnection, "totalCount"> & {
    nodes: Array<
      Pick<
        Types.Task,
        | "id"
        | "title"
        | "description"
        | "dueDate"
        | "completed"
        | "stageId"
        | "createdAt"
        | "updatedAt"
      >
    >;
  };
};

export type TaskShowQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"]["input"];
}>;

export type TaskShowQuery = {
  task: Pick<
    Types.Task,
    | "id"
    | "title"
    | "description"
    | "dueDate"
    | "completed"
    | "stageId"
    | "createdAt"
    | "updatedAt"
  >;
};

export type TaskStagesSelectQueryVariables = Types.Exact<{
  filter: Types.TaskStageFilter;
}>;

export type TaskStagesSelectQuery = {
  taskStages: { nodes: Array<Pick<Types.TaskStage, "id" | "title">> };
};

export type TaskStageCreateMutationVariables = Types.Exact<{
  input: Types.CreateOneTaskStageInput;
}>;

export type TaskStageCreateMutation = {
  createOneTaskStage: Pick<Types.TaskStage, "id" | "title">;
};

export type TaskStageEditMutationVariables = Types.Exact<{
  input: Types.UpdateOneTaskStageInput;
}>;

export type TaskStageEditMutation = {
  updateOneTaskStage: Pick<Types.TaskStage, "id" | "title">;
};

export type TaskStagesListQueryVariables = Types.Exact<{
  paging: Types.OffsetPaging;
  filter?: Types.InputMaybe<Types.TaskStageFilter>;
  sorting: Array<Types.TaskStageSort> | Types.TaskStageSort;
}>;

export type TaskStagesListQuery = {
  taskStages: Pick<Types.TaskStageConnection, "totalCount"> & {
    nodes: Array<Pick<Types.TaskStage, "id" | "title" | "createdAt">>;
  };
};

export type TaskStageShowQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"]["input"];
}>;

export type TaskStageShowQuery = {
  taskStage: Pick<Types.TaskStage, "id" | "title" | "createdAt">;
};
