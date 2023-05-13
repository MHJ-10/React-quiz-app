import axios from 'axios';

interface Question {
    category: string
    type: string
    difficulty: string
    question: string
    correct_answer: string
    incorrect_answers: string[]
}

export interface QuestionState extends Question {
  answers: string[]
 }

class QuestionService {

 shuffleAnswers = (array: any[]) => 
   [...array.sort(()=>Math.random() - 0.5)]
    
 async getQuestions (amount: number, category: number) {
    const response = await axios.get(`https://opentdb.com/api.php?amount=${amount}&category=${category}&type=multiple`)
    return response.data.results.map((question: Question) => (
        {
          ...question,
          answers: this.shuffleAnswers([question.correct_answer, ...question.incorrect_answers])
        }
    ))
 }

}

export default new QuestionService();