import { Pressable, StyleSheet, Text, View, Appearance } from "react-native";
import React, { useState } from "react";

const RadioButtonContainer = ({ isSelected, value, onPress }) => {
  return (
    <Pressable
      style={{
        ...styles.radioButtonContainer,
      }}
      onPress={() => onPress(value)}
    >
      {isSelected && (
        <View
          style={{
            height: 15,
            width: 15,
            borderRadius: 8,
            backgroundColor: "dodgerblue",
          }}
        ></View>
      )}
    </Pressable>
  );
};
const RadioButton = ({
  isTitlteRequired = true,
  containerStyle,
  textStyle,
  onChangeText,
  data = [],
}) => {
  const [selected, setSelected] = useState("");
  const colorScheme = Appearance.getColorScheme();

  return (
    <View
      style={{
        marginHorizontal: 8,
      }}
    >
      {data &&
        data?.map((val, i) => (
          <Pressable
            style={{
              borderColor: val.value === selected ? "dodgerblue" : "grey",
              ...styles.container,
              ...containerStyle,
            }}
            onPress={() => {
              setSelected(val.value);
              val.value !== selected && onChangeText(val);
            }}
          >
            {isTitlteRequired && (
              <Text
                style={{
                  color: colorScheme === "dark" ? "white" : "black",
                  ...textStyle,
                }}
              >
                {val.label}
              </Text>
            )}
            <RadioButtonContainer
              isSelected={val.value === selected}
              onPress={(val1) => {
                setSelected(val1);
                val.value !== selected && onChangeText(val);
              }}
              value={val.value}
            />
          </Pressable>
        ))}
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderWidth: 1,
    marginVertical: 5,
    borderRadius: 5,
  },

  radioButton: {},
  radioButtonContainer: {
    height: 30,
    width: 30,
    marginVertical: 20,
    backgroundColor: "white",
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "dodgerblue",
    justifyContent: "center",
    alignItems: "center",
  },
});
