import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HistoryScreen = () => {
    return (
        <SafeAreaView edges={["top", "left", "right"]}>
            <ThemedView style={styles.wrapper}>
                <ThemedText>History</ThemedText>
            </ThemedView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        height: "100%",
    },
});

export default HistoryScreen;
