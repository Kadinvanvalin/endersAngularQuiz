 var myApp = angular.module('quizApp', ["ngRoute"]);


    myApp.config(function ($routeProvider){

      $routeProvider

        .when('/',{
          templateUrl: "pages/preQuiz.html",
          controller:'PreQuizController'
        })
        .when('/quiz',{
          templateUrl: "pages/quiz.html",
          controller:'QuizAppController'
        })
        .when('/post',{
          templateUrl: "pages/postQuiz.html",
          controller:'PostQuizController'
        })
      });



      myApp.controller("PreQuizController", preQuizCtrl);
      myApp.controller('QuizAppController', quizCtrl);
      myApp.controller("PostQuizController", postQuizCtrl);


    function preQuizCtrl($scope, $location){
 //$scope.state = state;
      $scope.startQuiz = function(){
              //shuffle($scope.state[quizNum].answers);
         $location.path('/quiz');
        }






    }



    function quizCtrl($scope, $location) {
      $scope.state = state;
      $scope.quizNum = quizNum;
      $scope.correctAnswers = correctAnswers;

      
     
  shuffle = function(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
    

           
      

     

      $scope.nextQuestion = function(selected){
        shuffle($scope.state[$scope.quizNum].answers);
         if(selected == state[$scope.quizNum].correctAns){
          $scope.correctAnswers++; 
        }
        if($scope.quizNum >= 4){$location.path('/post');}
        $scope.quizNum++;
      }
     
      //$location.path('/');
      
    }




    function postQuizCtrl($scope, $location){
      $scope.restart = function(){
        $location.path('/');
        $scope.quizNum = 0;
        $scope.correctAnswers = 0;
        
      }


    }