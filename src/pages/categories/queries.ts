import gql from "graphql-tag";

export const CATEGORY_CREATE_MUTATION = gql`
  mutation TaskStageCreate($input: CreateOneTaskStageInput!) {
    createOneTaskStage(input: $input) {
      id
      title
    }
  }
`;

export const CATEGORY_EDIT_MUTATION = gql`
  mutation TaskStageEdit($input: UpdateOneTaskStageInput!) {
    updateOneTaskStage(input: $input) {
      id
      title
    }
  }
`;

export const CATEGORIES_LIST_QUERY = gql`
  query TaskStagesList(
    $paging: OffsetPaging!
    $filter: TaskStageFilter
    $sorting: [TaskStageSort!]!
  ) {
    taskStages(paging: $paging, filter: $filter, sorting: $sorting) {
      nodes {
        id
        title
        createdAt
      }
      totalCount
    }
  }
`;

export const CATEGORY_SHOW_QUERY = gql`
  query TaskStageShow($id: ID!) {
    taskStage(id: $id) {
      id
      title
      createdAt
    }
  }
`;
