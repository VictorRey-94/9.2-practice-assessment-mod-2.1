const testPeople = require("./data.json");

/* 

The year is 2232.

Corporations have displaced world governments to become the primary organizations of power.

People say "Have a WalMart-ful day" unironically. Truly a wasteland.

You are a data sifter. You eke out an existence by selling bundled personal information siphoned off of the global IntraNet through nefarious means. It is not a glamorous life, but it is better than being an Amazon Fresh sponsored influencer making TikTok videos promoting Pink Sauce v3.4. Unless you'd prefer that. If you do, that's weird bro, just do the problems.

You've just received your latest collection of data, and a set of orders to fulfill. Get it done.

The data you're working with will look like this:

{
    id: Number
    first_name: String
    last_name: String
    email: String
    gender: String
    ip_address: String
    credit_card: {
        number: String,
        type: String,
    },
    username: String,
    employer: String,
}

*/

/* 
    Returns a filtered list of people that are employed by the given employer.

    Should throw an error (use the string "The `people` array is empty.") if people is empty or undefined.

    Should throw an error if no employer is provided.

    Note: Must use .filter()

    @params {Object[]} people - Array of objects matching the format above
    @params {String} employer - The employer to filter on
    @returns {Object[]} - A list of people that are employed by the given employer
*/

function filterDataByEmployer(people, employer) {
    
    let filter = people.filter((person) => {return person.employer === `${employer}`})
    if(people.length === 0 ) {
        throw "The `people` array is empty."
    }
    return filter
}

/* 
    Returns the credit card details of every person in the given array. Each object in the array should look like: 
    
    { name: "<first_name> <last_name>", number: <credit_card.number>, type: <credit_card.type> }

    Should throw an error if people is empty or undefined (use the string "The `people` array is empty.").

    Note: Must use .map()

    @params {Object[]} people - Array of objects matching the format above.
    @returns {Object[]} - Array of objects matching the pattern in this problem description.
*/

function getCreditCardDetails(people) {
    let cardDetails = people.map((person) => {
return {name: person.first_name + " " + person.last_name, number: person.credit_card.number, type: person.credit_card.type}
    })
    if(people.length === 0) {
        throw "The `people` array is empty."
    }
    return cardDetails
}

/* 
    Returns a unique array of employers, sorted alphabetically from A-Z.

    Throws an error if people is empty (use the string "The `people` array is empty.").

    Note: Must use .forEach() and .sort()

    Hint: You should use forEach to iterate over the list of people and add each employer to some array or object to keep track of the employers you've already seen.

    @params {Object[]} people - Array of objects matching the format above.
    @returns {String[]} - Array of employers, sorted alphabetically, unique values only.
*/
function getAllEmployers(people) {
    let employers = [];
    if(people.length === 0) {
        throw "The `people` array is empty."
    }
    people.forEach((e) => {
        if(!employers.includes(e.employer)) {
            employers.push(e.employer)
        }
    })
    return employers.sort((a,b) => a > b ? 1: -1)
}

/* 
    Finds a person by a given first name and last name from a list of people.

    Throws an error if the people to search is empty (use the string "The `people` array is empty.").

    Throws an error if no person could be found with the given first name and last name (use the string "Person with given name could not be found.").

    Note: Must use .find()

    @params {Object[]} people - Array of objects matching the format above.
    @params {String} first - First name to search for.
    @params {String} last - Last name to search for.
    @returns {Object} - Person with the given first and last name.
*/

function getPersonByName(people, first, last) {
    if(people.length === 0) {
        throw "The `people` array is empty."
    }
let personFound = people.find((person) => person.first_name === first && person.last_name === last)
if(!personFound) {
    throw "Person with given name could not be found." 
}
return personFound
}

/* 
    Determines whether any person has a given IP.

    Throws an error if people is empty (use the string "The `people` array is empty.").

    Throws an error if no ipAddress is provided.

    Note: Must use .some()

    @params {Object[]} people - Array of objects matching the format above.
    @params {String} ipAddress- The IP address to look for.
    @returns {Boolean} - Whether we've found the IP address.
*/

function ipIsPresent(people, ipAddress) {
    if(people.length === 0) {
        throw "The `people` array is empty."
    }
    if (!ipAddress){
        throw "No IP has been provided."
    }
 let hasIp = people.some((person) => person.ip_address === ipAddress)
 return hasIp
}

/* 
    An IP address is composed of four numbers, each separated by a dot. Each of those numbers will be between 1 and 255, with some additional rules that we won't get into here. We want to find all people that have IP addresses where all of those numbers in their IP address are greater than 100.

    Here are some example passing and failing cases:

    Fail: "99.98.97.96", "102.99.98.97", "104.244.103.1"

    Pass: "102.201.233.103", "255.255.255.255"

    Note that ALL numbers in the IP must be greater than 100.

    Throws an error if people is empty (use the string "The `people` array is empty.").

    Note: Must use .every() and .filter()

    @params {Object[]} people - Array of objects matching the format above.
    @returns {Object[]} - Array of people matching the conditions in the description.
*/

function findLargeOctets(people) {
    if(people.length === 0) {
        throw "The `people` array is empty."
    }
    const filtered = people.filter((person) => {
        const ipArray =  person.ip_address.split(".");
        return ipArray.every((num) => num >= 100);  
    });
    return filtered
}

module.exports = {
    filterDataByEmployer,
    getCreditCardDetails,
    getAllEmployers,
    getPersonByName,
    ipIsPresent,
    findLargeOctets,
}