import React, {useState} from "react";
import {Button, Modal, StyleSheet, TextInput, View} from "react-native";

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={goalInputHandler}
                    placeholder="Course Goal"
                    style={styles.input}
                    value={enteredGoal}
                />
                <View style={styles.actionsContainer}>
                    <View style={styles.button}>
                        <Button title="CANCEL" onPress={props.onCancelGoal} color="red"/>
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    actionsContainer: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "60%"
    },
    button: {
        width: '40%'
    }
});

export default GoalInput;
