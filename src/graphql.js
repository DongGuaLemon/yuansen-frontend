import gql from 'graphql-tag'

export const SIGNUP_MUTATION = gql`
    mutation SignupMutation($phone: String!) {
        createUser(
            phone: $phone
          ) {
            id
            phone
        }
    }
`
export const SUBVERI_MUTATION = gql`
    mutation SubveriMutation($verification: String!) {
      subverification(
        verification: $phone
          ) {
            id
            verification
        }
    }
`
export const MAIN_QUERY = gql`
    query MainQuery {
        topic {
            main
            imgsrc
            button {
                id
                ans
                isactive
            }
        }
    }
`