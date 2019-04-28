// Adding activity

let activities = [];

function addActivity(date, activity, duration) {

    activities.push({ date, activity, duration })

}

addActivity("23/7-18", "Youtube", 30);

addActivity("24/7-18", "Netflix", 90);

addActivity("25/7-18", "Kindle", 60);

console.log(activities);

// function showing the current limit usage

function showStatus(activities) {

    let totalActivities = 0;

    let limit = 100;

    if (activities.length === 0) {

        console.log("Add some activities before calling showStatus");

        return;

    }

    else {

        for (let i = 0; i < activities.length; i++) {

            totalActivities += activities[i].duration;

        }

        console.log("You have added" + " " + activities.length + " " + "activities. They amount to" + " " + totalActivities + " " + "min. of usage");

        if (totalActivities > limit) {

            console.log("You have reached your limit, no more smartphoning for you!");

        }else 

        {

            console.log("Still you have time to use smart phone");

        }

    }

}


console.log (showStatus(activities));