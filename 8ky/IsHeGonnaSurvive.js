// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

function hero(bullets, dragons){
//Get Coding!
   return bullets >= (dragons * 2)  ? true : false;
}

//This problem was a good way to practice ternary expressions. My initial thought was to solve this with an if statement but this was shorter. 
