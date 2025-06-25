import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="main/screen"
                options={{
                    title: "Home",
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="history/screen"
                options={{
                    title: "History",
                    headerShown: false,
                }}
            />
        </Tabs>
    );
}
