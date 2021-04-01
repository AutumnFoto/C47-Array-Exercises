import { useStudents, useInstructors } from "./data/classroom.js";

const students = useStudents();
const instructors = useInstructors();

// Export a function named getStudentsInCohort
// It should accept one integer parameter named `cohort`
// It should return an array of just the students who are in that cohort

export const getStudentsInCohort = (cohort) => {
  return useStudents().filter(item => item.cohort===cohort);
 }

// Export a function called getFullTimeStudents
// It should not accept any parameters
// It should return an array of only the full time students

export const getFullTimeStudents = () => {
    return useStudents().filter(item => item.fulltime === true);
}


// Export a function called getStudentsByInstructorId
// It should accept one integer parameter name `instructorId`
// It should return an array of students with that instructor

export const getStudentsByInstructorId = (instructorId) => {
    return useStudents().filter(item => item.instructorId === instructorId)

}

// Export a function called getPolyglotStudents
// It should accept one integer parameter named `languageCount`
// It should return an array of students who know as many (or more) languages than `languageCount`
// Ex: If the number 2 is passed to the function, only the students who know 2 or more languages should be returned

export const getPolyglotStudents=(languageCount) => {
    return useStudents().filter(student=> student.languages.length >= languageCount );

}
// Export a function called getAvailableInstructors
// It should not accept any parameters
// It should return an array of instructors that don't have any students

export const getAvailableInstructors = () => { 
    // setting instructorArray equal to mapping through useStudents and return students that have the instructor id
    let instructorArray = useStudents().map(item => {
        return item.instructorId;

  })
//   filtering useIntrustors by if the instructorArray includes an instructor Id, and its equal to false then return the item. 
  return useInstructors().filter(item=> {
      if(instructorArray.includes(item.id)  === false){
          return item;
      }
  })
}
// Export a function called getStudentsByLanguage
// It should accept one string parameter named `language`
// It should return an array of students who know the given language
// HINT: In addition to the `filter` method, you might also look up the `some` method

// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

export const getStudentsByLanguage = (language) => {
    return students.filter(student => student.languages.includes(language))   
}

// couldnt figure out how to use some - come back to this 

/******** ADVANCED CHALLENGE ********/
/******** Only do this if all other tests are passing ****/
/******** To test, uncomment the code at the bottom of tests/filter.spec.js  *****/

// Export a function called getStudentsByLanguages
// It should accept an array of strings as a parameter named `languages`
// It should return an array of students who know ALL of the given languages
// Ex: getStudentsByLanguages(["Javascript", "C#"])
