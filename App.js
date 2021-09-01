import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);

    const addGoalHandler = (goalTitle) => {
        setCourseGoals(currentGoals => [...currentGoals, {id: uuidv4(), value: goalTitle}]);
    };

    const removeGoalHandler = (goalId) => {
        setCourseGoals(currentGoals => {
            console.log('goalId: ', goalId);
            return currentGoals.filter(goal => goal.id !== goalId);
        });
    };

    return (
        <SafeAreaView>
            <View style={styles.screen}>
                <GoalInput submit={addGoalHandler}/>
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
