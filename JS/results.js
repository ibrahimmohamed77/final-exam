const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwEK4P8IpwsriJPZIBc6blM12FBm4bERXV1sK3Lp4hA8bAZv3Ac2u_SZHpQovwG_tprCw/exec";


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
            await fetch(
                GOOGLE_SCRIPT_URL
            );


        const results =
            await response.json();


        /*
           Sort by score
           If same score → faster time first
        */

        results.sort(
            function(a, b) {

                if (
                    Number(a.score)
                    !==
                    Number(b.score)
                ) {

                    return (
                        Number(b.score)
                        -
                        Number(a.score)
                    );

                }


                return (
                    convertTime(
                        a.timeUsed
                    )
                    -
                    convertTime(
                        b.timeUsed
                    )
                );

            }
        );


        loading.style.display =
            "none";


        ranking.innerHTML =
            "";


        /*
           DISPLAY RESULTS
        */

        results.forEach(
            function(student, index) {

                const row =
                    document.createElement(
                        "div"
                    );


                row.className =
                    "ranking-row";


                /*
                   MEDALS
                */

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


                /*
                   CREATE ROW
                */

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
                        ${formatDisplayTime(
                            student.timeUsed
                        )}
                    </div>

                `;


                ranking.appendChild(
                    row
                );

            }
        );


    }

    catch (error) {

        console.error(
            error
        );


        loading.textContent =
            "An error occurred while loading the results.";

    }

}


/* =========================================
   CONVERT TIME
   Used for sorting
========================================= */

function convertTime(time) {

    if (!time) {

        return 0;

    }


    time =
        time.toString();


    /*
       Google Sheets ISO Date

       Example:
       1899-12-29T22:16:51.000Z
    */

    if (
        time.includes("T")
    ) {

        const date =
            new Date(time);


        return (
            date.getUTCHours()
            *
            3600
            +
            date.getUTCMinutes()
            *
            60
            +
            date.getUTCSeconds()
        );

    }


    /*
       Normal Time

       HH:MM:SS
       or
       MM:SS
    */

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
            hours * 3600
            +
            minutes * 60
            +
            seconds
        );

    }


    if (parts.length === 2) {

        const minutes =
            Number(parts[0]) || 0;


        const seconds =
            Number(parts[1]) || 0;


        return (
            minutes * 60
            +
            seconds
        );

    }


    return 0;

}


/* =========================================
   FORMAT DISPLAY TIME
========================================= */

function formatDisplayTime(time) {

    if (!time) {

        return "00:00:00";

    }


    time =
        time.toString();


    /*
       Google Sheets ISO Date

       Example:
       1899-12-29T22:16:51.000Z
    */

    if (
        time.includes("T")
    ) {

        const date =
            new Date(time);


        const hours =
            String(
                date.getUTCHours()
            ).padStart(
                2,
                "0"
            );


        const minutes =
            String(
                date.getUTCMinutes()
            ).padStart(
                2,
                "0"
            );


        const seconds =
            String(
                date.getUTCSeconds()
            ).padStart(
                2,
                "0"
            );


        return (
            hours
            +
            ":"
            +
            minutes
            +
            ":"
            +
            seconds
        );

    }


    /*
       Already normal time
    */

    return time;

}


/* =========================================
   START
========================================= */

loadResults();