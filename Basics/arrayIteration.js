function basicFindStudent(allStudents = ['bob', 'sam', 'cole', 'harry', 'ron'], studentName) {
   /* 
   // using javascript features
   const foundStudent = allStudents.find((stdName) => stdName == studentName);
   if (!foundStudent) {
      console.log('Student not found');
      return;
   }
   console.log('Student exists and is found', foundStudent); 
   */

   //algorithmic approach
   //BEST CASE: O(1)
   //WORST CASE: O(N)
   //AVERAGE CASE: O(N)
   
   let isFound = false;
   for (let i = 0; i < allStudents.length - 1; i++) {
      if (studentName === allStudents[i]) {
         isFound = true;
         break;
      }
   }
 
   if (isFound) {
      console.log('Student exists in array and is found for : ', studentName);
   } else {
      console.log('Student was not found');
   }

}

export {
   basicFindStudent
};