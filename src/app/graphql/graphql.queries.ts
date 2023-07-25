import {gql} from 'apollo-angular'

const GET_BOOKINGCODES = gql`
    query {
    checkinData {
        bookingCode
        lastName
        flightNumber
    }
    }
    `
    
    export {GET_BOOKINGCODES}