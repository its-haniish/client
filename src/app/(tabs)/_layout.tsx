import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs, useRouter } from "expo-router";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";

export default function RootLayout() {
    return (
        <Tabs screenOptions={screenOptions}>
            
            <Tabs.Screen name="Blogs"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="reader-sharp" size={size} color={color} />
                    ),
                }}
            />
                        <Tabs.Screen name="Call"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="call" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen name="Chat"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="chatbubbles" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen name="Home"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),
                }}
            />


        </Tabs>);
}

const screenOptions = {
    headerTitle: () => null,
    headerLeft: () => <HeaderLeft />,
    headerRight: () => <HeaderRight />,
}

const HeaderLeft = () => {
    const router = useRouter();
    return (
        <View className={headerLeftStyles.container}>
            <TouchableWithoutFeedback onPress={() => router.push("/Profile")}>
                <Image source={require("../../assets/default_user.png")} className={headerLeftStyles.image} />
            </TouchableWithoutFeedback>
            <Text>Hi, Hanish</Text>
        </View>
    );
}

const HeaderRight = () => {
    const router = useRouter();
    return (
        <View className={headerRightStyles.container}>

            {/* wallet  */}
            <View className={headerRightStyles.walletContainer}>
                <TouchableWithoutFeedback onPress={() => router.push("/Wallet")}>
                    <View className={headerRightStyles.wallet}>
                        <Ionicons name="wallet-outline" size={22} color="black" />
                        <View className={headerRightStyles.currencyWrapper}>
                            <MaterialIcons name="currency-rupee" size={15} color="black" />
                            <Text>20</Text>
                        </View>
                        <Entypo name="circle-with-plus" size={21} color="blue" />
                    </View>
                </TouchableWithoutFeedback>
            </View>

            {/* notification  */}
            <View>
                <TouchableWithoutFeedback onPress={() => router.push("/Notifications")}>
                    <View className={headerRightStyles.notificationContainer}>
                        <Ionicons name="notifications-outline" size={25} color="black" />
                        <View className={headerRightStyles.countIcon}>
                            <Text className={headerRightStyles.countText}>9+</Text>
                        </View>

                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}

const headerLeftStyles = {
    container: "flex-row items-center justify-start ml-4 gap-1",
    image: "w-10 h-10",
}

const headerRightStyles = {
    container: "flex-row items-center justify-center gap-4 mr-4",
    walletContainer: "flex-row items-center justify-center gap-4 border border-sky-400 rounded-full px-2 py-1",
    wallet: "flex-row items-center justify-center gap-1",
    currencyWrapper: "flex-row items-center justify-center",
    notificationContainer: "flex-row items-center justify-center gap-1 relative",
    countIcon: "bg-red-500 rounded-full w-[16px] h-[16px] absolute top-[-5px] right-[-5px]",
    countText: "text-white text-[11px] text-center"
}