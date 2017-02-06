  angular.module('diveLog', [])
      .controller('diveLogCtrl', DiveLogCtrl);
    
    function DiveLogCtrl($scope) {
      $scope.questions = questions;
      $scope.quizNum = quizNum;
      $scope.correctAnswers = correctAnswers;
      
     
      function setView(view){
      	$scope.view = view;
      }
     
      $scope.startQuiz = function(){
      	setView('quiz');
      }
      $scope.enableSubmit = function(){
        return 1;
      }

      $scope.selectAnswer = function(num){
       
        console.log(num);
      } 
      $scope.nextQuestion = function(){
         if($scope.test == 'correct'){
          $scope.correctAnswers = correctAnswers++; 
        }
        if($scope.quizNum === 4){setView('post');}
        $scope.quizNum = quizNum++;
        console.log(quizNum);
      }
      setView('preQuiz');
      console.log($scope.view);
    }