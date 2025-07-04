import gql from "graphql-tag";

// Mutation to update user
export const UPDATE_USER_MUTATION = gql`
  mutation UpdateUser($input: UpdateOneUserInput!) {
    updateOneUser(input: $input) {
      id
      name
      avatarUrl
      email
      phone
      jobTitle
    }
  }
`;

// Mutation to create company
export const CREATE_COMPANY_MUTATION = gql`
  mutation CreateCompany($input: CreateOneCompanyInput!) {
    createOneCompany(input: $input) {
      id
      salesOwner {
        id
      }
    }
  }
`;

// Mutation to update company details
export const UPDATE_COMPANY_MUTATION = gql`
  mutation UpdateCompany($input: UpdateOneCompanyInput!) {
    updateOneCompany(input: $input) {
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
    }
  }
`;

// Mutation to update task stage of a task
export const UPDATE_TASK_STAGE_MUTATION = gql`
  mutation UpdateTaskStage($input: UpdateOneTaskInput!) {
    updateOneTask(input: $input) {
      id
      title
      stage {
        id
        title
      }
    }
  }
`;

// Mutation to create a new task
export const CREATE_TASK_MUTATION = gql`
  mutation CreateTask($input: CreateOneTaskInput!) {
    createOneTask(input: $input) {
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
    }
  }
`; 