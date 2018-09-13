$("#students > tbody > tr:nth-child(1)")
    .children(".assignment")
    .toArray()
    .reduce((rv, hw) => {
        let score = hw
            .attributes
            .class
            .nodeValue
            .split(' ')[2];
        switch (score) {
            case "score_0":
                score = "Not Graded"
                break;
            case "score_1":
                score = "Failed"
                break;
            case "score_2":
                score = "Needs Improvement"
                break;
            case "score_3":
                score = "Pass"
                break;
            case "score_4":
                score = "Exceeds Expectations"
                break;

            default:
                break;
        }
        rv[score]++;
        return rv;
    }, {
        "Not Graded": 0,
        "Failed": 0,
        "Needs Improvement": 0,
        "Pass": 0,
        "Exceeds Expectations": 0
    })