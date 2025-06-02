import gql from "graphql-tag";

export const TASKS_QUERY = gql`
  query Tasks(
    $filter: TaskFilter!
    $sorting: [TaskSort!]
    $paging: OffsetPaging!
  ) {
    tasks(filter: $filter, sorting: $sorting, paging: $paging) {
      nodes {
        id
        title
        description
        dueDate
        completed
        stage {
          id
          title
        }
        users {
          id
          name
          avatarUrl
        }
        checklist {
          title
          checked
        }
        createdAt
        updatedAt
      }
      totalCount
    }
  }
`;

export const TASK_STAGES_QUERY = gql`
  query TaskStages(
    $filter: TaskStageFilter!
    $sorting: [TaskStageSort!]
    $paging: OffsetPaging!
  ) {
    taskStages(filter: $filter, sorting: $sorting, paging: $paging) {
      nodes {
        id
        title
        tasks {
          id
          title
          completed
          description
          dueDate
          stage {
            id
            title
          }
          users {
            id
            name
            avatarUrl
          }
          checklist {
            title
            checked
          }
        }
      }
      totalCount
    }
  }
`;

export const COMPANIES_QUERY = gql`
  query Companies(
    $filter: CompanyFilter!
    $sorting: [CompanySort!]
    $paging: OffsetPaging!
  ) {
    companies(filter: $filter, sorting: $sorting, paging: $paging) {
      nodes {
        id
        name
        totalRevenue
        industry
        companySize
        businessType
        country
        website
        avatarUrl
        salesOwner {
          id
          name
          avatarUrl
        }
        createdAt
      }
      totalCount
    }
  }
`;

export const USERS_QUERY = gql`
  query Users(
    $filter: UserFilter!
    $sorting: [UserSort!]
    $paging: OffsetPaging!
  ) {
    users(filter: $filter, sorting: $sorting, paging: $paging) {
      nodes {
        id
        name
        email
        avatarUrl
        createdAt
        updatedAt
      }
      totalCount
    }
  }
`; 