
var countQues=0;
var lang;
var score=0;

var HTMLquestions=[

    {
        question: "India is a federal union comprising twenty-eight states and how many union territories?",
        choices: ["6","7","8","9"],
        answer: 2
    },
    {
        question: "Which of the following is the capital of Arunachal Pradesh?",
        choices: ["Itanagar","Dispur","Impahal","Pnaji"],
        answer: 1
    },
    {
        question: "What are the major languages spoken in Andhra Pradesh?",
        choices: [". Odia and Telugu"," Telugu and Urdu"," Telugu and Kannada","All of the above languages"],
        answer: 2
    },
    {
        question: " What is the state flower of Haryana?",
        choices: [" Lotus"," Rhododendron"," Golden Shower","Not Declared"],
        answer: 1   
    },
    {/*5*/
        question: "Which of the following states is not located in the North?",
        choices: ["Jharkhand"," Jammu and Kashmir","Himachal Pradesh","Haryana"],
        answer: 1
    },
];
var CSSquestions=[
    {
        question: " Who is the President of Sri Lanka?",
        choices: ["Gotabaya Rajapaksa","Sajith Premadasa","Mahindra Rajapaksa","Ranil Wickremesinghe"],
        answer: 1
    }, 
    {
        question: "Which of the following is the Capital of Sri Lanka?",
        choices: ["Jayawardenepur","Colombo","Both (a) and (b)","None of the Above"],
        answer: 3
    },
    {
        question: "What is the cause of the economic crisis in Sri Lanka?",
        choices: ["Depreciation of currency","Depreciation of forex reserves","Rise in fuel and food prices","All of the above"],
        answer: 4
    }, 
    {/*4*/
        question: "On which of the following the economy of Sri Lanka depends?",
        choices: ["Agriculture","Import and Export","Tourism","None of the above"],
        answer: 3
    },
    {
        question:  "When did the economic crisis of Sri Lanka start?",
        choices: ["2012","2019","2005","2022    "],
        answer: 2
    },            
];
var JSquestions=[
    {
        question: " What is the total length of India and Nepal border?",
        choices: [". Approx 1651 sq km","Approx 1751 sq km","Approx 1851 sq km","Approx 1951 sq km"],
        answer: 2
    }, 
    {
        question: " Nepal has just got its first woman President and Speaker, which other post also had its first female head?",
        choices: ["Chief Comptroller Accounts","Attorney General"," Prime Minister","Chief Justice"],
        answer: 4
    },
    {
        question: " Which country has launched a 10 year plan to cut dependence on vegetable imports from India?",
        choices: ["Nepal","Pakistan","Bangladesh","None of the above"],
        answer: 1
    }, 
    {
        question: " Nepal has taken what recent action on 27th September 2015 as a result of fuel shortage",
        choices: [" Odd even license plate system for vehicles on alternative days","Changing to CNG driven cars","Disallowing vehicles to ply on roads during weekends","None of the above"],
        answer: 3
    },
    {
        question: "With which country India has amended a bilateral treaty of transit through four border points?",
        choices: ["Pakista ","Srilanka","China","Nepal"],
        answer: 2
    },    
];
                                                      
//alert(questions.length);
document.getElementById("score").textContent="Score : "+0;
document.querySelector(".view-results").style.display="none";
document.querySelector(".quiz").style.display="none";
document.querySelector(".final-result").style.display="none";
document.querySelector(".choose-lang").addEventListener("click",function(){
    lang=document.getElementById("language").value+"questions";
    document.getElementById("ques-left").textContent="Question : "+(countQues+1)+"/"+window[lang].length;
//    alert(window[lang].length);
    //window["anything"] will convert "anything" string to object because window is also an object
    document.querySelector(".quiz").style.display="block";
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
     for (i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
    };/*For loop Closed*/
//    window.location.href="#score";
});
document.querySelector(".submit-answer").addEventListener("click",function(){
//     alert(window[lang][countQues].choices[window[lang][countQues].answer-1]);
//     alert(document.querySelector('input[name="options"]:checked').value);
    if(document.querySelector('input[name="options"]:checked').value===window[lang][countQues].choices[window[lang][countQues].answer-1]){
        score+=10;
        document.getElementById("score").textContent="Score : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle correct'>"+(countQues+1)+"</div>";
    }else{
        score-=5;
        document.getElementById("score").textContent="Score : "+score;
        document.getElementById("ques-view").innerHTML+="<div class='ques-circle incorrect'>"+(countQues+1)+"</div>";
    };
    if (countQues<window[lang].length-1){
        countQues++;
    }else{
        document.querySelector(".submit-answer").style.display="none";
        document.querySelector(".view-results").style.display="unset";
    }
    document.getElementById("ques-left").textContent="Question : "+(countQues+1)+"/"+window[lang].length;
    document.querySelector(".question").innerHTML="<h1>"+window[lang][countQues].question+"</h1>";
    for (i=0;i<=3;i++){                     
        document.getElementById("opt"+i).value=window[lang][countQues].choices[i];
        document.getElementById("lb"+i).innerHTML=window[lang][countQues].choices[i];
    };/*For loop Closed*/
});
document.querySelector(".view-results").addEventListener("click",function(){
    document.querySelector(".final-result").style.display="block";
    document.querySelector(".solved-ques-no").innerHTML="You Solved "+(countQues+1)+" questions of "+document.getElementById("language").value;
    var correct= document.getElementById("ques-view").getElementsByClassName("correct").length;
    document.querySelector(".right-wrong").innerHTML=correct+" were Right and "+((countQues+1)-correct)+" were Wrong";
    document.getElementById("display-final-score").innerHTML="Your Final Score is: "+score;
    if (correct/(countQues+1)>0.8){
        document.querySelector(".remark").innerHTML="Remark: OutStanding ! :)";
    }else if(correct/(countQues+1)>0.6){
        document.querySelector(".remark").innerHTML="Remark: Good, Keep Improving.";
    }else if(correct/(countQues+1)){
        document.querySelector(".remark").innerHTML="Remark: Satisfactory, Learn More.";
    }else{
        document.querySelector(".remark").innerHTML="Remark: Unsatisfactory, Try Again.";
    }
//    window.location.href="#display-final-score";
});
document.getElementById("restart").addEventListener("click",function(){
    location.reload();
});
document.getElementById("about").addEventListener("click",function(){
    alert("Quiz Website Project Created By Digvijay Singh");
});
/*Smooth Scroll*/
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

/*Smooth Scroll End*/