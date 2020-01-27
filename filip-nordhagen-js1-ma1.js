/* 
    JavaScript 1 - Module Assignment 1
*/

/*
    Question 1

    Create an object called cat.
    Give the object one property called complain. complain's value should be a method (a function) which logs the string "Meow!".
*/

let kitten = {
    complain: function(){
        console.log("Meow");
    }
};

kitten.complain

/*
    Question 2
    Select the h3 from the HTML below using the querySelector method and assign it to a variable called heading.
    <h3>Subheading</h3>
*/

const heading = document.querySelector("h3");


/*
    Question 3
    Use the style property on the heading variable from the question above to change its font size to "2em".
*/

heading.style.fontSize = "2em";

/*
    Question 4
    Add a class to the heading variable called subheading.
*/

heading.className = "subHeading";

/*
    Question 5
    Write code that selects all the p elements on a page and assigns them to a variable called paragraphs.
*/

const paragraph = document.querySelectorAll ("p");

/*
    Question 6
    Select the div by its class from the HTML below, assign it to a variable called resultsContainer and set its inner HTML to be <p>New paragraph</p>.
    <div class="results"></div>
*/

const resultsContainer = document.querySelector("div");
resultsContainer.innerHTML = `<p>
                                New paragraph
                            </p>`;

/*
    Question 7
    Create a function that has one argument called catArray.
    Inside the function, loop through the catArray argument and console log the name property in each object.
    Call the function and pass in the cats variable below.
*/

function catArray() {
    for (let i = 0; catArray.length < 0; i++;){
        const cats = [
            {
                name: "Blob",
                age: 10
            },
            {
                name: "Harold",
            },
            {
                name: "Blurt",
                age: 21
            }
        ];

    } 
    console.log(catArray[0]);
    console.log(catArray[1]);
    console.log(catArray[2]);
}

catArray(cats);

/*
    Question 8
    Using the function and cats variable from the above question, instead of logging the name property, wrap each name property in an h5 tag, add it to a variable you declare before the loop and return the variable from the function after the loop.
*/
function catsSuck(catArray) {
    let catsHTML = "";
    for (let i = 0; i < catarray.length; i++) {
    catsHTML +=  `<h5>${catArray[i].name}</h5>`;
    console.log(catsHTML);
    return catsHTML;
}
};



/* 
    Question 9
    Call the function from question 8, pass it the cats variable from question 7 and set the inner HTML of the resultsContainer variable from question 6 to the return value of the function.
*/

catsSuck(cats); {
    resultsContainer.innerHTML = `<p>
                                New paragraph
                            </p>`;
    return cats;
};

/*
    Question 10
    Using the function from question 8, add a p element containing the age property from each object. If the age property is missing, it should display Age unknown instead.
    Wrap the h5 and p in a div.
*/

function catsSuck() {
    catsHTML += `<p>${catArray[i].age}</p>`;
    if (age === false){
        console.log("Age unknown");
    }
    const catsSuckWrapper = `<div>
    <h5>${catArray[i].name}</h5>,
    <p>${catArray[1].age}</p>
    </div>`;
}

