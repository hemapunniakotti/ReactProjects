const baseUrl="http://localhost:7000"

export function courseList(){
    const output=fetch(`${baseUrl}/courses`,
        {method:'GET'})
    .then((response) => response.json())
 
    return{
        type:'GET_COURSES',
        payload:output
    }
}
export function enquiryList(){
    const output=fetch(`${baseUrl}/enquiries`,
        {method:'GET'})
    .then((response) => response.json())

    return{
        type:'GET_ENQUIRIES',
        payload:output
    }
}