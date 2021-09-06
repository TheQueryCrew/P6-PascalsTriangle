// Pascals triangle using pointers

/*					1 
				
				1		1
			
			1		2		1
		
		1		3		3		1
	
	1		4		6		6		1
	
looking at pascals triangle from the top i.e 1 

we can see that the nodes in the next line are 0 + 1 = 1 and 1 + 0 = 1

moving to the next line its deductable that the nodes are formed using
0 + 1 = 1; 1 + 1 = 2; 1 + 0 = 1;

and so on for the next lines as well

so I initialise two pointers and set one as ptr1 = 0 and one as the base 1, ptr = 1;
I add the pointers and get 1 for the next line 
then I move the pointers such that now ptr1 =  base 1; and ptr2 = 0 and add them to get next node 1
so here we got the next line of pascals tree as '1		1'

for third line we consider the prev line '1 	1'
we do ptr1 = 0; ptr2 = 1; ptr1+ptr2 = 1; then move ptr1 = 1 and now since next node in prev line is 1
ptr2 = 1; so ptr1 + ptr2 = 2; and then move ptr1 = 1 and ptr2 = 0; ptr1 + ptr2 = 1;
so we get the third line as '1		2		1'

for the rest we do the same; 

Observation:
Initial base 1 must be predefined
We must keep a track of the previous line in memory to find the next line
for each line N we swap pointer values for N + 1 times to find next line;
*/

// Node js module for CLI input
const readline = require('readline');
const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function pascalsTriangle(n) {
  //initialise output as an empty string
  let output = '';

  //initialise two pointers
  let ptr1, ptr2;

  // set predefined base as 1
  let arr = [[1]];

  // Starting from one since base 1 is already defined
  for (let i = 1; i < n; i++) {
    // Store previous line
    let prevArr = arr[i - 1];

    // empty arr to store values of nth line
    let newArr = [];

    // for every i'th line we change pointers for i+1 times
    for (let j = 0; j < i + 1; j++) {
      ptr1 = prevArr[j - 1] === undefined ? 0 : prevArr[j - 1];

      ptr2 = prevArr[j] === undefined ? 0 : prevArr[j];

      newArr.push(ptr1 + ptr2);

      //when both pointers are 0(null) we break out of loop
      if (ptr1 === 0 && ptr2 === 0) break;
    }

    // Store the i'th line in main arr
    arr.push(newArr);
  }

  // loop through lines and convert them from number to string data type
  arr = arr.map((el) => el.map((el) => String(el)));

  // add the string numbers in output string to form pascals triangle
  arr.forEach((el) => (output += `${el.join(',')}\n`));

  //output pascals triangle
  console.log(output);
}

//Get user input through CLI
userInput.question(
  "Enter number of rows for generating Pascal's triangle : ",
  (num) => {
    pascalsTriangle(num);
    userInput.close();
  }
);
