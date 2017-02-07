  angular.module('quizApp', [])
      .controller('quizAppCtrl', quizAppCtrl);
    
    function quizAppCtrl($scope) {
      $scope.questions = questions;
      $scope.quizNum = quizNum;
      $scope.correctAnswers = correctAnswers;
      
     
      function setView(view){
      	$scope.view = view;
      }
      function shuffle(array) {
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
          $scope.correctAnswers++; 
        }
        if($scope.quizNum >= 4){setView('post');}
        $scope.quizNum++;
        console.log(quizNum);
      }
      $scope.restart = function(){
        setView('preQuiz');
        $scope.quizNum = 0;
        $scope.correctAnswers = 0;
        
      }
      setView('preQuiz');
      console.log($scope.view);
    }