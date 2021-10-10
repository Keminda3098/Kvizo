

export const QuizApi = {

    getQuizByCategory: function(category)  {
      return fetch('https://opentdb.com/api.php?amount=5&category=' + category + "&difficulty=medium")
      
    }
  
}