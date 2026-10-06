const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwD1D7gGUyu30bXbXg21EzOh1vMaqLvt5JyFloOeJjqpzj1ADm33OEPr4zQ3NNaTaJt7Q/exec"


/* =========================================
   LOAD RESULTS
========================================= */

async function loadResults() {

    const loading =
        document.getElementById("loading");

    const ranking =
        document.getElementById("ranking");


    try {

        const response =
            await fetch(GOOGLE_SCRIPT_URL);


        const results =
            await response.json();


        /* =========================================
           SORT RESULTS

           Higher score first.
           If same score → faster exam time first.
        ========================================= */

        results.sort(
            function (a, b) {

                if (
                    Number(a.score) !==
                    Number(b.score)
                ) {

                    return (
                        Number(b.score) -
                        Number(a.score)
                    );

                }


                return (
                    convertTime(a.timeUsed) -
                    convertTime(b.timeUsed)
                );

            }
        );


        /* =========================================
           HIDE LOADING
        ========================================= */

        loading.style.display =
            "none";


        ranking.innerHTML =
            "";


        /* =========================================
           DISPLAY RESULTS
        ========================================= */

        results.forEach(
            function (student, index) {

                const row =
                    document.createElement("div");


                row.className =
                    "ranking-row";


                /* =========================================
                   MEDALS
                ========================================= */

                let medal = "";


                if (index === 0) {

                    medal = "🥇";

                }
                else if (index === 1) {

                    medal = "🥈";

                }
                else if (index === 2) {

                    medal = "🥉";

                }
                else {

                    medal =
                        index + 1;

                }


                /* =========================================
                   CREATE ROW
                ========================================= */

                row.innerHTML = `

                    <div class="rank">
                        ${medal}
                    </div>

                    <div class="student-name">
                        ${student.name}
                    </div>

                    <div class="score">
                        ${student.score}/${student.total}
                    </div>

                    <div class="percentage">
                        ${student.percentage}%
                    </div>

                    <div class="time">
                        ${student.submittedAt || "--"}
                    </div>

                `;


                ranking.appendChild(row);

            }
        );


    }
    catch (error) {

        console.error(error);


        loading.textContent =
            "An error occurred while loading the results.";

    }

}


/* =========================================
   CONVERT TIME
   Used ONLY for sorting
========================================= */

function convertTime(time) {

    if (!time) {

        return 0;

    }


    time =
        time.toString().trim();


    /* =========================================
       Arabic Google Sheets Time

       Example:
       1:36:49 ص 2026/10/07
    ========================================= */

    const arabicTime =
        time.match(
            /^(\d{1,2}):(\d{2}):(\d{2})\s*(ص|م)/
        );


    if (arabicTime) {

        let hours =
            Number(arabicTime[1]);


        const minutes =
            Number(arabicTime[2]);


        const seconds =
            Number(arabicTime[3]);


        const period =
            arabicTime[4];


        if (period === "ص") {

            if (hours === 12) {

                hours = 0;

            }

        }
        else {

            if (hours !== 12) {

                hours += 12;

            }

        }


        return (
            hours * 3600 +
            minutes * 60 +
            seconds
        );

    }


    /* =========================================
       ISO Date

       Example:
       1899-12-29T22:16:51.000Z
    ========================================= */

    if (
        time.includes("T")
    ) {

        const date =
            new Date(time);


        if (
            isNaN(date.getTime())
        ) {

            return 0;

        }


        return (
            date.getUTCHours() * 3600 +
            date.getUTCMinutes() * 60 +
            date.getUTCSeconds()
        );

    }


    /* =========================================
       HH:MM:SS
    ========================================= */

    const parts =
        time.split(":");


    if (parts.length === 3) {

        const hours =
            Number(parts[0]) || 0;


        const minutes =
            Number(parts[1]) || 0;


        const seconds =
            Number(parts[2]) || 0;


        return (
            hours * 3600 +
            minutes * 60 +
            seconds
        );

    }


    /* =========================================
       MM:SS
    ========================================= */

    if (parts.length === 2) {

        const minutes =
            Number(parts[0]) || 0;


        const seconds =
            Number(parts[1]) || 0;


        return (
            minutes * 60 +
            seconds
        );

    }


    return 0;

}


/* =========================================
   START
========================================= */

loadResults();