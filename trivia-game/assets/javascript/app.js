
// DATA
var questions = [
    {
        question: "Who is the all-time leader in assists in the NBA",
        options: ["John Stockton", "Steve Nash", "Jason Kid"],
        correct: "John Stockton"
    },
    {
        question: "Who is the all time points leader in the NBA.",
        options: ["Kobe Bryant", "	Karl Malone", "	Kareem Abdul-Jabbar"],
        correct: "Kareem Abdul-Jabbar"
    },
    {
        question: "Who is the all time leader in triple doubles in the NBA.",
        options: ["Russell Westbrook", "Magic Johnson", "Jason Kid"],
        correct: "Magic Johnson"
    },
]

var count = 45;
var timer;
var userAsnwer;
// FUNCTIONS

function gameTimer() {
    count--;
    $("#timer").html(count)
    if (count === 0) {
        clearInterval(timer)
    }
   // console.log("TIME LEFT: ", count)
}


function startGame() {
    timer = setInterval(gameTimer, 1000)

    // for each question, add it to the screen
    for (var i = 0; i < questions.length; i++) {
        console.log("question: ", questions[i].question);
        
        // Container to hold question and answers
        var questionContainer = $("<div>");

        // This question's title (the question)
        var quest = $("<h1>").text(questions[i].question);

        // Add question title to container
        questionContainer.append(quest);

        // for each answer in this question, add the answer to the question container
        for (var j = 0; j < questions[i].options.length; j++) {
            console.log("options: ", questions[i].options[j])

            // answer
            var opt = $("<button>").text(questions[i].options[j]).attr("data-question-num", i);
            console.log(opt)
            
            // add answer(option) to question container
            questionContainer.append(opt);
            // Create a input html value with type=radio and append to html $().append("<input type=radio")
        }

        // add question container to the outer questions container in the html
        $("#questions").append(questionContainer);
    }
    // $("<button>").addClass("button-answers");
    $("button").on('click', function() {
        var userAnswer = $(this).text();
        var questionNum = $(this).attr('data-question-num')
        console.log(userAnswer);
        if (userAnswer===questions[questionNum].correct) {
            alert("CORRECT!!!");
        } 
        else {
        alert ("WRONG!!!");
        }
    });

 
}






// LOGIC
startGame()
