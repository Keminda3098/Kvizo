import React from "react";
import { View, Text, ActivityIndicator, StyleSheet, Image, Pressable } from "react-native";
import { firebase } from '../../firebase/config';
import Question from "../Question/Question";
import styles from "../Questions/QuestionsStyle";

export default class Questions extends React.Component {
  constructor(props) {
    super(props);

    const userData = this.props.extraData

    this.state = {
      loading: false,
      userData: userData,
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
    if (category == "General Knowledge") {
      const resp = await fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=medium');
    }

    else if (category == "Films") {
      const resp = await fetch('https://opentdb.com/api.php?amount=5&category=11&difficulty=medium');
    }


    else if (category == "Television") {
      const resp = await fetch('https://opentdb.com/api.php?amount=5&category=14&difficulty=medium');
    }


    else if (category == "Video games") {
      const resp = await fetch('https://opentdb.com/api.php?amount=5&category=15&difficulty=medium');
    }


    else if (category == "Music") {
      const resp = await fetch('https://opentdb.com/api.php?amount=5&category=12&difficulty=medium');
    }


    else if (category == "Books") {
      const resp = await fetch('https://opentdb.com/api.php?amount=5&category=12&difficulty=easy&type=multiple');
    }


    else if (category == "History") {
      const resp = await fetch('https://opentdb.com/api.php?amount=5&category=12&difficulty=easy&type=multiple');
    }
    else {
      const resp = await fetch('https://opentdb.com/api.php?amount=5&category=12&difficulty=easy&type=multiple');
    }

    const quiz = await resp.json();
    const { results } = quiz;
    results.forEach(item => { item.id = Math.floor(Math.random() * 10000); });
    //console.log(results)
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
        this.getQuizQuestions(); //get quiz questions call after reset
      }
    );
  };

  submitAnswer = (indx, answer) => {
    const question = this.state.questions[indx];
    const isCorrect = question.correct_answer === answer;
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
    this.getQuizQuestions();
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
          <Question onSelect={answer => { this.submitAnswer(this.state.current, answer); }} question={this.state.questions[this.state.current]} correctPosition={Math.floor(Math.random() * 3)}
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
