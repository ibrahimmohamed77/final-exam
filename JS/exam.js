
/* =========================================
   GOOGLE SHEETS
========================================= */


const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzfHWiF3kkbSwbrMvDavryFSo1Sl67KqCBJDPMXq77dZY9G9EHWW2a5ugfBVmgpRIzRdA/exec";


/* =========================================
   EXAM SETTINGS
========================================= */

const EXAM_DURATION =
    60 * 60; // 60 minutes


/* =========================================
   STUDENT
========================================= */

const studentName =
    localStorage.getItem("studentName");


if (!studentName) {

    window.location.href =
        "index.html";

}


/* =========================================
   EXAM QUESTIONS
========================================= */

// Create a private copy of the questions
let examQuestions =
    JSON.parse(
        JSON.stringify(questions)
    );


// Shuffle questions
shuffleArray(examQuestions);


/* =========================================
   USER ANSWERS
========================================= */

let userAnswers =
    new Array(
        examQuestions.length
    ).fill(null);


/* =========================================
   CURRENT QUESTION
========================================= */

let currentQuestion = 0;


/* =========================================
   TIMER
========================================= */

let timeLeft = 0;

let timerInterval;


/* =========================================
   DISPLAY STUDENT NAME
========================================= */

document.getElementById(
    "displayName"
).textContent = studentName;


/* =========================================
   SHUFFLE FUNCTION
========================================= */

function shuffleArray(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            array[i],
            array[j]
        ] =
        [
            array[j],
            array[i]
        ];

    }

}


/* =========================================
   SHUFFLE OPTIONS
========================================= */

function shuffleOptions(question) {

    const correctAnswer =
        question.answer;


    shuffleArray(
        question.options
    );


    /*
       answer is stored as text,
       so we don't lose the correct answer.
    */

    question.answer =
        correctAnswer;

}


/* =========================================
   SHUFFLE ALL OPTIONS
========================================= */

examQuestions.forEach(
    function(question) {

        shuffleOptions(question);

    }
);


/* =========================================
   CALCULATE REMAINING TIME
========================================= */

function calculateRemainingTime() {

    const startTime =
        Number(
            localStorage.getItem(
                "examStartTime"
            )
        );


    if (!startTime) {

        window.location.href =
            "index.html";

        return;

    }


    const elapsed =
        Math.floor(
            (
                Date.now()
                -
                startTime
            ) / 1000
        );


    timeLeft =
        EXAM_DURATION
        -
        elapsed;


    if (timeLeft <= 0) {

        timeLeft = 0;

    }

}


/* =========================================
   SHOW QUESTION
========================================= */

function showQuestion() {

    const question =
        examQuestions[
            currentQuestion
        ];


    /*
       Question number
    */

    document.getElementById(
        "questionNumber"
    ).textContent =

        `السؤال ${currentQuestion + 1}`;


    /*
       Counter
    */

    document.getElementById(
        "questionCounter"
    ).textContent =

        `السؤال ${currentQuestion + 1} من ${examQuestions.length}`;


    /*
       Question text
    */

    document.getElementById(
        "questionText"
    ).textContent =
        question.question;


    /*
       Code
    */

    document.getElementById(
        "questionCode"
    ).textContent =
        question.code;


    /*
       Options
    */

    const optionsContainer =
        document.getElementById(
            "options"
        );


    optionsContainer.innerHTML = "";


    question.options.forEach(
        function(option, index) {

            const label =
                document.createElement(
                    "label"
                );


            label.className =
                "option";


            if (
                userAnswers[
                    currentQuestion
                ]
                === option
            ) {

                label.classList.add(
                    "selected"
                );

            }


            label.innerHTML = `

                <input
                    type="radio"
                    name="answer"
                >

                ${String.fromCharCode(
                    65 + index
                )})
                ${option}

            `;


            label.addEventListener(
                "click",
                function() {

                    selectAnswer(
                        option
                    );

                }
            );


            optionsContainer.appendChild(
                label
            );

        }
    );


    updateNavigation();

    updateProgress();

}


/* =========================================
   SELECT ANSWER
========================================= */

function selectAnswer(answer) {

    userAnswers[
        currentQuestion
    ] = answer;


    showQuestion();

}


/* =========================================
   NEXT BUTTON
========================================= */

document.getElementById(
    "nextBtn"
).addEventListener(
    "click",
    function() {

        if (
            currentQuestion
            <
            examQuestions.length - 1
        ) {

            currentQuestion++;

            showQuestion();

        }

    }
);


/* =========================================
   PREVIOUS BUTTON
========================================= */

document.getElementById(
    "previousBtn"
).addEventListener(
    "click",
    function() {

        if (currentQuestion > 0) {

            currentQuestion--;

            showQuestion();

        }

    }
);


/* =========================================
   NAVIGATION
========================================= */

function updateNavigation() {

    const previousBtn =
        document.getElementById(
            "previousBtn"
        );


    const nextBtn =
        document.getElementById(
            "nextBtn"
        );


    const submitBtn =
        document.getElementById(
            "submitBtn"
        );


    /*
       Previous
    */

    if (currentQuestion === 0) {

        previousBtn.style.display =
            "none";

    }

    else {

        previousBtn.style.display =
            "block";

    }


    /*
       Last question
    */

    if (
        currentQuestion
        ===
        examQuestions.length - 1
    ) {

        nextBtn.style.display =
            "none";

        submitBtn.style.display =
            "block";

    }

    else {

        nextBtn.style.display =
            "block";

        submitBtn.style.display =
            "none";

    }

}


/* =========================================
   PROGRESS
========================================= */

function updateProgress() {

    const answered =
        userAnswers.filter(
            function(answer) {

                return answer !== null;

            }
        ).length;


    document.getElementById(
        "answeredCounter"
    ).textContent =

        `تمت الإجابة على ${answered} / ${examQuestions.length}`;


    const progress =
        (
            (currentQuestion + 1)
            /
            examQuestions.length
        )
        *
        100;


    document.getElementById(
        "progress"
    ).style.width =

        progress + "%";

}


/* =========================================
   TIMER
========================================= */

function startTimer() {

    updateTimer();


    timerInterval =
        setInterval(
            function() {

                timeLeft--;

                updateTimer();


                /*
                   Time finished
                */

                if (timeLeft <= 0) {

                    clearInterval(
                        timerInterval
                    );


                    alert(
                        "انتهى وقت الامتحان وسيتم تسليم الإجابات تلقائيًا."
                    );


                    submitExam();

                }

            },
            1000
        );

}


/* =========================================
   UPDATE TIMER
========================================= */

function updateTimer() {

    const minutes =
        Math.floor(
            timeLeft / 60
        );


    const seconds =
        timeLeft % 60;


    document.getElementById(
        "timer"
    ).textContent =

        String(minutes)
            .padStart(2, "0")
        +
        ":"
        +
        String(seconds)
            .padStart(2, "0");


    /*
       Last 5 minutes
    */

    if (timeLeft <= 300) {

        document.getElementById(
            "timer"
        ).classList.add(
            "warning"
        );

    }

}


/* =========================================
   FORMAT TIME
========================================= */

function formatTime(seconds) {

    const minutes =
        Math.floor(
            seconds / 60
        );


    const remainingSeconds =
        seconds % 60;


    return (

        String(minutes)
            .padStart(2, "0")

        +

        ":"

        +

        String(
            remainingSeconds
        )
        .padStart(2, "0")

    );

}


/* =========================================
   SEND RESULT TO GOOGLE SHEETS
========================================= */

async function sendResultToGoogleSheet(
    result
) {

    try {

        await fetch(
            GOOGLE_SCRIPT_URL,
            {

                method: "POST",

                mode: "no-cors",

                headers: {

                    "Content-Type":
                        "text/plain;charset=utf-8"

                },

                body:
                    JSON.stringify(result)

            }
        );


        console.log(
            "تم إرسال النتيجة إلى Google Sheets"
        );


    }

    catch (error) {

        console.error(
            "حدث خطأ أثناء إرسال النتيجة:",
            error
        );

    }

}


/* =========================================
   SUBMIT EXAM
========================================= */

document.getElementById(
    "submitBtn"
).addEventListener(
    "click",
    submitExam
);


async function submitExam() {

    clearInterval(
        timerInterval
    );


    /*
       Count unanswered questions
    */

    const unanswered =
        userAnswers.filter(
            function(answer) {

                return answer === null;

            }
        ).length;


    /*
       Ask before submitting
    */

    if (
        unanswered > 0
        &&
        timeLeft > 0
    ) {

        const confirmSubmit =
            confirm(

                `يوجد ${unanswered} سؤال بدون إجابة.\n\nهل أنت متأكد أنك تريد تسليم الامتحان؟`

            );


        if (!confirmSubmit) {

            startTimer();

            return;

        }

    }


    /*
       Calculate score
    */

    let score = 0;


    examQuestions.forEach(
        function(question, index) {

            if (
                userAnswers[index]
                ===
                question.answer
            ) {

                score++;

            }

        }
    );


    /*
       Time used
    */

    const timeUsed =
        EXAM_DURATION
        -
        timeLeft;


    /*
       Percentage
    */

    const percentage =
        Math.round(
            (
                score
                /
                examQuestions.length
            )
            *
            100
        );


function showSubmissionScreen() {

    // Stop timer
    clearInterval(timerInterval);

    // Show success screen
    const submissionScreen =
        document.getElementById("submissionScreen");

    submissionScreen.style.display = "flex";

    // Disable exam completely
    document
        .querySelectorAll("button, input")
        .forEach(function(element) {

            element.disabled = true;

        });

    // Prevent scrolling
    document.body.style.overflow = "hidden";

}

    /*
       Result object
    */

    const result = {

        name:
            studentName,

        score:
            score,

        total:
            examQuestions.length,

        percentage:
            percentage,

        timeUsed:
            formatTime(timeUsed),

        submittedAt:
            new Date().toISOString()

    };


    /*
       Send to Google Sheets
    */

    await sendResultToGoogleSheet(
        result
    );


    /*
       Save locally too
    */

    localStorage.setItem(
        "lastResult",
        JSON.stringify(result)
    );


    /*
       Remove exam start time
    */

    localStorage.removeItem(
        "examStartTime"
    );



    
 showSubmissionScreen();

    /*
       Go to result page
    */

    // window.location.href =
    //     "results.html";

}


/* =========================================
   START EXAM
========================================= */

calculateRemainingTime();

showQuestion();

startTimer();