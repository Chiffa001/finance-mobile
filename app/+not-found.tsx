import { Link, Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: "Oops!" }} />
            <ThemedView style={styles.container}>
                <ThemedText style={styles.title} type="title">
                    This screen does not exist.
                </ThemedText>
                <Link href="/(tabs)/main/screen" style={styles.link}>
                    <ThemedText type="link">Go to home screen!</ThemedText>
                </Link>
            </ThemedView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    link: {
        marginTop: 15,
    },
    title: {
        textAlign: "center",
        fontSize: 28,
    },
});
