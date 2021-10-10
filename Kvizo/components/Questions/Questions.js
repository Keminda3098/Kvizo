import React from "react";
import { View, Text, ActivityIndicator, StyleSheet, Image, Pressable } from "react-native";
import { firebase } from '../../firebase/config';
import Question from "../Question/Question";
import styles from "../Questions/QuestionsStyle";
import { QuizApi } from "../../api/QuizApi";

export default class Questions extends React.Component {
  constructor(props) {
    super(props);

    const userData = this.props.extraData;
    var category = this.props.route.params.category || 9;

    this.state = {
      loading: false,
      userData: userData,
      category: category,
      questions: [],
      current: 0,
      correctScore: 5,
      output: {
        score: 0,
        numberOfCorrectAnswers: 0
      },
      completed: false
    };
  }

  getQuizQuestions = async (category) => {

    await this.setState({ loading: true });
    const resp = await QuizApi.getQuizByCategory(category)
    const quiz = await resp.json();
    const { results } = quiz;
    results.forEach(item => { item.id = Math.floor(Math.random() * 10000); });
    await this.setState({ questions: results, loading: false });
  };

  resetQuiz = () => {
    this.setState({

      questions: [],
      current: 0,
      output: {
        score: 0,
        numberOfCorrectAnswers: 0
      },
      completed: false
    },
      () => {
        this.getQuizQuestions(this.state.category); //get quiz questions call after reset
      }
    );
  };

  submitAnswer = (indx, answer) => {
    const question = this.state.questions[indx];
    const isCorrect = question.correct_answer === answer;
    console.log("index" + indx + " | " + "answer" + answer );
    const output = { ...this.state.output };

    output.score = isCorrect ? output.score + 5 : output.score;
    output.numberOfCorrectAnswers = isCorrect ? output.numberOfCorrectAnswers + 1 : output.numberOfCorrectAnswers;

    this.setState({
      current: indx + 1,
      output,
      completed: indx === 4 ? true : false
    });


  };

  componentDidMount() {
    this.getQuizQuestions(this.state.category);
  }

  render() {
    var questionLength = this.state.questions.length;
    var completeState = this.state.completed;
    var loadingState = this.state.loading;

    if (this.state.completed) {
      var score = this.state.output.score;
      var numberOfCorrectAnswers = this.state.output.numberOfCorrectAnswers
      var userId = this.state.userData["id"];

      const data = {
        userId,
        score,
        numberOfCorrectAnswers,
      };

      firebase.firestore().collection('marks').doc(userId).set(data)
        .then(() => {
        })
        .catch((error) => {
          alert(error)
        });
    }


    return (

      <View style={styles.container}>
        {loadingState ? (
          <View style={styles.loadingQuestions}>
            <ActivityIndicator size="large" color="#00ff00" />
            <Text style={{ fontSize: 50, color: "#fdfcfe" }}>Get Ready....</Text>
          </View>
        ) : (<></>)}

        {questionLength > 0 && completeState === false ? (
          <Question onSelection={answer => { this.submitAnswer(this.state.current, answer); }} question={this.state.questions[this.state.current]} correctPosition={Math.floor(Math.random() * 3)}
            current={this.state.current}
          />
        ) : (<></>)}

        <View style={styles.output} >
          {completeState === true ? (
            <View style={{ alignItems: "center" }}>
              {this.state.output.numberOfCorrectAnswers > 3 ? (<Image style={styles.icon} source={require('../../assets/owl.png')} />) : <Image style={styles.icon} source={require('../../assets/owl.png')} />}

              {this.state.output.numberOfCorrectAnswers > 3 ? (<Text style={{ fontSize: 50, color: "green" }}>Congratulations</Text>) : (<Text style={{ fontSize: 50, color: "#fdfcfe", fontWeight: 'bold' }}>Try Again</Text>)}
              <View style={styles.content}>
                <Text >Correct Answers Given: {this.state.output.numberOfCorrectAnswers}</Text>
                <Text>
                  Incorrect Answers Given: {5 - this.state.output.numberOfCorrectAnswers}
                </Text>

                <Text>Obtained Score : {this.state.output.score}</Text>
              </View>
              <Pressable style={styles.button} onPress={() => this.resetQuiz()}  >
                <Text style={styles.text}>Restart</Text>
              </Pressable>
            </View>
          ) : (<></>)}
        </View>
      </View>
    );
  }
}
