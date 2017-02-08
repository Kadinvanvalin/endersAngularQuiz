  angular.module('quizApp', [])
      .controller('quizAppCtrl', quizAppCtrl);
    
    function quizAppCtrl($scope) {
      $scope.state = state;
      $scope.quizNum = quizNum;
      $scope.correctAnswers = correctAnswers;

      
     
      function setView(view){
      	$scope.view = view;
      }

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

           $scope.startQuiz = function(){
            shuffle($scope.state[quizNum].answers);

      	setView('quiz');
      }
      $scope.enableSubmit = function(){
        return 1;
      }

      $scope.setAnswer = function(selectedAns){
        console.log(selectedAns);
        $scope.selectedAns = selectedAns;
        
      }

      $scope.nextQuestion = function(selected){
        shuffle($scope.state[quizNum].answers);
         if($scope.selectedAns == state[$scope.quizNum].correctAns){
          $scope.correctAnswers++; 
        }
        if($scope.quizNum >= 4){setView('post');}
        $scope.quizNum++;
      }
      $scope.restart = function(){
        setView('preQuiz');
        $scope.quizNum = 0;
        $scope.correctAnswers = 0;
        
      }
      setView('preQuiz');
      
    }