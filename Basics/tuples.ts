 function calculateStatistics (scores){
    var min = scores[0];
    var max = scores[0];
    var sum = 0;

    for (var score in scores){
        if (score > max){
            max = score;
        }
        else if(score < min){
            min = score;
        }
        sum += score;
    }
    return [min,max,"Hello"];
}

let statistics = calculateStatistics([25,39,78,66,74,80]);

var min = statistics[0];
var max = statistics[1];
var msg = statistics[2]; // Contains hello
