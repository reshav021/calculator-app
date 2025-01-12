import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import CalculatorDisplay from "./components/CalculatorDisplay";
import ButtonRow from "./components/ButtonRow";
import TopRightButtons from "./components/TopRightButtons";

const App = () => {
  const [input, setInput] = useState("");
  const [isAdvanced, setIsAdvanced] = useState(false);

  const handlePress = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "<") {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  const basicButtons = [
    ["C", "%", "<", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["00", "0", ".", "="],
  ];

  const advancedButtons = [
    ...basicButtons,
    ["sin", "cos", "tan", "rad", "π"],
    ["%", "√", "^", "(", ")"],
  ];

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <TopRightButtons
          onToggleAdvanced={() => setIsAdvanced(!isAdvanced)}
          onShowConversions={() =>
            alert("Currency & Length Conversion Coming Soon!")
          }
        />
        <View style={styles.innerContainer}>
          <CalculatorDisplay input={input} />
          {(isAdvanced ? advancedButtons : basicButtons).map((row, i) => (
            <ButtonRow buttons={row} onPress={handlePress} key={i} />
          ))}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "flex-end",
  },
  innerContainer: {
    justifyContent: "flex-end",
    padding: 10,
  },
});

export default App;