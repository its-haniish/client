import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Octicons from '@expo/vector-icons/Octicons';
import { Image, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
export default function Chat() {
    return (
        <View className={styles.mainContainer}>
            {/* header for chat  */}
            <View className={styles.header.container}>
                {/* image crousel  */}
                <Image className={styles.header.image} resizeMode="cover" source={require("../../assets/chat_posters/poster1.png")} />
                {/* page title & btns  */}
                <View className={styles.header.titleAndBtnsWrapper}>
                    <View className={styles.header.titleContainer}>
                        <Text className={styles.header.title}>Love</Text>
                        <Text className={styles.header.subTitle}>Chats</Text>
                    </View>

                    {/* btns  */}
                    <View className={styles.header.btnsContainer}>
                        <TouchableWithoutFeedback>
                            <View className={styles.header.btnWrapper}>
                                <FontAwesome6 name="sliders" size={16} color="black" />
                                <Text className={styles.header.btnText}>Filter</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                            <View className={styles.header.btnWrapper}>
                                <Octicons name="history" size={16} color="black" />
                                <Text className={styles.header.btnText}>History</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>

                </View>

            </View>

            {/* chat list  */}
            <ScrollView showsHorizontalScrollIndicator={false} contentContainerClassName={styles.card.container}>
                {/* chat item  */}
                {Array.from({ length: 10 }).map((_, index) => (
                    <View key={index}>
                        {mentorCard()}
                    </View>
                ))}

            </ScrollView>
        </View>
    );
}

const mentorCard = () => {
    return (
        <TouchableWithoutFeedback>
            <View className={styles.card.cardWrapper}>
                {/* Left section  */}
                <View className={styles.card.leftContainer.wrapper}>
                    <Image className={styles.card.leftContainer.image} source={require("../../assets/default.png")} />
                    <View className={styles.card.leftContainer.ratingWrapper}>
                        <FontAwesome6 name="star" size={16} color="gray" />
                        <FontAwesome6 name="star" size={16} color="gray" />
                        <FontAwesome6 name="star" size={16} color="gray" />
                        <FontAwesome6 name="star" size={16} color="gray" />
                        <FontAwesome6 name="star" size={16} color="gray" />
                    </View>
                </View>
                {/* Middle section  */}
                <View className={styles.card.middleContainer.wrapper}>
                    <Text className={styles.card.middleContainer.title}>Expert name</Text>
                    <Text className={styles.card.middleContainer.subTitle}>English, Hindi</Text>
                    <Text className={styles.card.middleContainer.subTitle}>Exp- 3 years</Text>
                    <Text className={styles.card.middleContainer.subTitle}>₹50/min</Text>
                </View>

                {/* Right section  */}
                <View className={styles.card.rightContainer.wrapper}>
                    <Image className={styles.card.rightContainer.image} resizeMode='cover' source={require("../../assets/verify.png")} />
                    <TouchableOpacity className={styles.card.rightContainer.button}>
                        <Text className={styles.card.rightContainer.buttonText}>CHAT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = {
    mainContainer: "flex-1 justify-start bg-white",
    header: {
        container: "flex-col items-center justify-start mt-1 p-2 pb-3 border-b border-gray-300",
        image: "w-full h-[70px] rounded-lg",
        titleAndBtnsWrapper: "flex-row items-center justify-between w-full mt-3 px-1",
        titleContainer: "flex-row items-center justify-start",
        title: "text-3xl text-pink-500 font-bold",
        subTitle: "text-3xl text-blue-500 font-bold",
        btnsContainer: "flex-row items-center justify-center gap-2",
        btnWrapper: "bg-blue-100 border border-black flex-row justify-center items-center gap-1 rounded-xl px-2 py-1",
        btnText: "text-black",

    },
    card: {
        container: "flex-col items-center justify-start gap-2 py-2",
        cardWrapper: "flex-row items-center justify-between w-[95%] h-40 p-2 border border-gray-300 rounded-xl",
        leftContainer: {
            wrapper: "justify-center items-center gap-3 w-1/3 w-max-1/3",
            image: "w-20 h-20 border-2 border-sky-500 rounded-full",
            ratingWrapper: "flex-row items-center justify-center gap-1",
        },
        middleContainer: {
            wrapper: "justify-start items-start w-1/3 mt-[-20px] mr-[-15px]",
            title: "text-xl font-semibold",
            subTitle: "text-sm text-gray-600",
        },
        rightContainer: {
            wrapper: "justify-center items-center gap-5 w-1/3",
            image: "w-32 h-14",
            button: "border-2 border-yellow-300 px-5 py-1 rounded-3xl",
            buttonText: "text-yellow-500 text-lg font-bold"
        }
    }

};