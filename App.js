import React, {useState} from 'react';
import {Button, FlatList, SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);

    const addGoalHandler = (goalTitle) => {
        setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: goalTitle}]);
    };

    return (
        <SafeAreaView>
            <View style={styles.screen}>
                <GoalInput submit={addGoalHandler} />
                <FlatList data={courseGoals} renderItem={itemData => (
                    <GoalItem title={itemData.item.value}/>
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
