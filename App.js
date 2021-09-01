import React, {useState} from 'react';
import {Button, FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    const addGoalHandler = (goalTitle) => {
        setCourseGoals(currentGoals => [...currentGoals, {id: uuidv4(), value: goalTitle}]);
        setIsAddMode(false);
    };

    const removeGoalHandler = (goalId) => {
        setCourseGoals(currentGoals => {
            console.log('deleting goal with goalId: ', goalId);
            return currentGoals.filter(goal => goal.id !== goalId);
        });
    };

    const cancelGoalHandler = () => {
        setIsAddMode(false);
    };

    return (
        <SafeAreaView>
            <View style={styles.screen}>
                <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
                <GoalInput visible={isAddMode} onCancelGoal={cancelGoalHandler} onAddGoal={addGoalHandler}/>
                <FlatList
                    keyExtractor={(item, index) => item.id}
                    data={courseGoals}
                    renderItem={itemData => (
                        <GoalItem
                            id={itemData.item.id}
                            onDelete={removeGoalHandler}
                            title={itemData.item.value}
                        />
                    )}>
                </FlatList>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 30
    }
});
