import gql from "graphql-tag";

export const POST_CREATE_MUTATION = gql`
  mutation CreateTask($input: CreateOneTaskInput!) {
    createOneTask(input: $input) {
      id
      title
      description
      dueDate
      completed
      stageId
      createdAt
      updatedAt
    }
  }
`;

export const POST_EDIT_MUTATION = gql`
  mutation UpdateTask($input: UpdateOneTaskInput!) {
    updateOneTask(input: $input) {
      id
      title
      description
      dueDate
      completed
      stageId
      createdAt
      updatedAt
    }
  }
`;

export const POSTS_LIST_QUERY = gql`
  query TasksList(
    $paging: OffsetPaging!
    $filter: TaskFilter
    $sorting: [TaskSort!]!
  ) {
    tasks(paging: $paging, filter: $filter, sorting: $sorting) {
      nodes {
        id
        title
        description
        dueDate
        completed
        stageId
        createdAt
        updatedAt
      }
      totalCount
    }
  }
`;

export const POST_SHOW_QUERY = gql`
  query TaskShow($id: ID!) {
    task(id: $id) {
      id
      title
      description
      dueDate
      completed
      stageId
      createdAt
      updatedAt
    }
  }
`;

export const CATEGORIES_SELECT_QUERY = gql`
  query TaskStagesSelect($filter: TaskStageFilter!) {
    taskStages(filter: $filter) {
      nodes {
        id
        title
      }
    }
  }
`;
