import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { RadioGroup, RadioButton } from "react-native-flexi-radio-button";
import styles from "../Question/QuestionStyle";

export default class Question extends React.Component {
  constructor() {
    super();

    this.state = {
      answer: null
    };
  }

  renderSelection = quesObj => {
    if (quesObj.type === "boolean") {
      return [
        <RadioButton value={"True"} key={1}>
          <Text style={styles.radioText}>True</Text>
        </RadioButton>,
        <RadioButton key={2}>
          <Text style={styles.radioText}>False</Text>
        </RadioButton>
      ];
    } else {

      const result = [];

      quesObj.incorrect_answers.forEach((incorrect_answer, index) => {
        //to change the key in incorrect answers
        let key = `${quesObj.id}-${index}`;
        console.log(key)
        console.log(incorrect_answer)
        //to change the key in correct answer
        result.push(
          <RadioButton value={incorrect_answer} key={key}>
            <Text style={styles.radioText}>{incorrect_answer}</Text>
          </RadioButton>
        );
      })
      let key2 = `${quesObj.id}-100`;
      result.push(
        <RadioButton value={quesObj.correct_answer} key={key2}>
          <Text style={styles.radioText}>{quesObj.correct_answer}</Text>
        </RadioButton>
      );
      return result;
    }

  }

  render() {
    var quesObj = this.props.question;
    var question = quesObj.question;

    return (
      <View style={{ flex: 1, padding: 12, color: '#ffff' }}>
        <Text style={{ fontSize: 16, color: "#fff", textAlign: "right" }}>
          {this.props.current + 1} out of 5
        </Text>

        <Text style={{ fontSize: 25, fontWeight: "bold", color: "#fff" }}>
          {question}
        </Text>
        <RadioGroup style={styles.radio} color='#9575b2' onSelect={(index, answer) => this.setState({ answer: answer })}
          selectedIndex={null} >
          {this.renderSelection(quesObj)}
        </RadioGroup>
        <TouchableOpacity style={styles.button} onPress={() => { this.props.onSelect(this.state.answer); }}>
          <Text style={styles.buttonText}>Submit Answer </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
