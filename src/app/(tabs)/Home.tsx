import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
const mentorCardssData = [
    {
        id: 1,
        name: "Mahesh",
        price: 50,
        image: require("../../assets/expert/expert1.jpeg"),
    },
    {
        id: 2,
        name: "Ramesh",
        price: 60,
        image: require("../../assets/expert/expert2.jpeg"),
    },
    {
        id: 3,
        name: "Suresh",
        price: 50,
        image: require("../../assets/expert/expert1.jpeg"),
    },
    {
        id: 4,
        name: "Dogesh",
        price: 60,
        image: require("../../assets/expert/expert2.jpeg"),
    },
]
const blogCardsData = [
    {
        _id: 1,
        image: require("../../assets/blogs/image1.png"),
        author: "Sophia Carter",
        date: "March 8, 2025",
        slug: "how-to-build-trust-in-a-relationship",
        title: "How to Build Trust in a Relationship",
    },
    {
        _id: 2,
        image: require("../../assets/blogs/image1.png"),
        author: "James Anderson",
        date: "March 5, 2025",
        slug: "effective-communication-in-love",
        title: "Effective Communication in Love",
    },
    {
        _id: 3,
        image: require("../../assets/blogs/image1.png"),
        author: "Emily Roberts",
        date: "March 3, 2025",
        slug: "signs-of-healthy-relationship",
        title: "Signs of a Healthy Relationship",
    },
    {
        _id: 4,
        image: require("../../assets/blogs/image1.png"),
        author: "Michael Smith",
        date: "February 28, 2025",
        slug: "handling-long-distance-relationships",
        title: "Handling Long-Distance Relationships",
    },
    {
        _id: 5,
        image: require("../../assets/blogs/image1.png"),
        author: "Olivia Martinez",
        date: "February 25, 2025",
        slug: "expressing-love-in-different-ways",
        title: "Expressing Love in Different Ways",
    },
];
const circleCardssData = [
    {
        id: 1,
        title: "Daily Tips",
        image: require("../../assets/circle_cards/tips.png"),
        screen: "Blogs",
    },
    {
        id: 2,
        title: "Career Advice",
        image: require("../../assets/circle_cards/career.png"),
        screen: "Chat",
    },
    {
        id: 3,
        title: "Premium Services",
        image: require("../../assets/circle_cards/premium.png"),
        screen: "Profile",
    },
    {
        id: 4,
        title: "Love Blogs",
        image: require("../../assets/circle_cards/blogs.png"),
        screen: "Blogs",
    }
];

const footerCardsData = [
    {
        id: 1,
        title: "Private & Confidential",
        image: require("../../assets/circle_cards/private.png"),
    },
    {
        id: 2,
        title: "Verified Experts",
        image: require("../../assets/circle_cards/verified.png"),
    },
    {
        id: 3,
        title: "Secure Payments",
        image: require("../../assets/circle_cards/secure.png"),
    }
];

type ScreenNames = 'Blogs' | 'Chat' | 'Profile';

export default function App() {
    const router = useRouter();
    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            {/* top circle navigation  */}
            <View className={styles.circleCards.wrapper}>
                {
                    circleCardssData.map((item) => (
                        <TouchableWithoutFeedback key={item.id} onPress={() => router.push(`/${item.screen as ScreenNames}`)}>
                            <View className={styles.circleCards.card}>
                                <Image source={item.image} className={styles.circleCards.image} />
                                <Text className={styles.circleCards.title}>
                                    {item.title.split(" ")[0]}
                                </Text>
                                <Text className={styles.circleCards.subtitle}>
                                    {item.title.split(" ").slice(1).join(" ")}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    ))
                }
            </View>

            {/* poster */}
            <View className={styles.poster.wrapper}>
                <Image
                    source={require("../../assets/posters/quote.png")}
                    className={styles.poster.image}
                />
            </View>

            {/* mentor cards */}
            <View className={styles.mentorCards.wrapper}>
                <View className={styles.cardTitle.wrapper}>
                    <Text className={styles.cardTitle.title}>Love Mentors</Text>
                    <TouchableOpacity>
                        <Text className={styles.cardTitle.viewAll}>View All <AntDesign name="arrowright" size={16} /></Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        mentorCardssData.map((mentor) => (
                            <TouchableWithoutFeedback key={mentor.id} >
                                <View className={styles.mentorCards.mentorCards}>
                                    <Image source={mentor.image} className={styles.mentorCards.mentorImage} />
                                    <Text className={styles.mentorCards.mentorName}>{mentor.name}</Text>
                                    <View className={styles.mentorCards.priceWrapper}>
                                        <MaterialIcons className={styles.mentorCards.currencyIcon} color={"gray"} name="currency-rupee" size={15} />
                                        <Text className={styles.mentorCards.priceText}>{mentor.price}/hr</Text>
                                    </View>
                                    <TouchableOpacity className={styles.mentorCards.chatWrapper} >
                                        <Text className={styles.mentorCards.chatText}>Chat</Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableWithoutFeedback>
                        ))
                    }
                </ScrollView>
            </View>

            {/* poster */}
            <View className={styles.poster.wrapper}>
                <Image
                    source={require("../../assets/posters/poster2.png")}
                    className={styles.poster.image}
                />
            </View>

            {/* blog cards */}
            <View className={styles.mentorCards.wrapper}>
                <View className={styles.cardTitle.wrapper}>
                    <Text className={styles.cardTitle.title}>Latest Blogs</Text>
                    <TouchableOpacity>
                        <Text className={styles.cardTitle.viewAll}>View All <AntDesign name="arrowright" size={16} /></Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                    {
                        blogCardsData.map((blog) => (
                            <TouchableWithoutFeedback key={blog._id} >
                                <View className={styles.blogCards.wrapper}>
                                    <View className={styles.blogCards.imgAndTitleWrapper}>
                                        <Image source={blog.image} className={styles.blogCards.image} />
                                        <Text className={styles.blogCards.title}>{blog.title}{blog.title}</Text>
                                    </View>
                                    <View className={styles.blogCards.dateAndAuthorWrapper}>
                                        <Text className={styles.blogCards.author}>{blog.author}</Text>
                                        <Text className={styles.blogCards.author}>{blog.date}</Text>
                                    </View>


                                </View>
                            </TouchableWithoutFeedback>
                        ))
                    }
                </ScrollView>
            </View>

            {/* poster */}
            <View className={styles.poster.wrapper}>
                <Image
                    source={require("../../assets/posters/poster.png")}
                    className={styles.poster.image}
                />
            </View>

            {/* chat and call btns i.e btnSection in styles */}
            <View className={styles.btnSection.wrapper}>
                {/* chat btn  */}
                <TouchableWithoutFeedback>
                    <View className={styles.btnSection.btnContainer}>
                        <Ionicons name="chatbubble-ellipses" size={25} color="black" />
                        <Text className={styles.btnSection.btnTitle}>Chat with Mentors</Text>
                    </View>
                </TouchableWithoutFeedback>

                {/* call btn  */}
                <TouchableWithoutFeedback>
                    <View className={styles.btnSection.btnContainer}>
                        <Ionicons name="call" size={25} color="black" />
                        <Text className={styles.btnSection.btnTitle}>Call with Mentors</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>

            {/* home footer  */}
            <View className={styles.footer.wrapper}>
                {
                    footerCardsData.map((item) => (
                        <View key={item.id} className={styles.footer.card}>
                            <Image source={item.image} className={styles.footer.image} />
                            <Text className={styles.footer.title} numberOfLines={1}>
                                {item.title.split(" ")[0]}
                            </Text>
                            <Text numberOfLines={1} className={styles.footer.subtitle}>
                                {item.title.split(" ").slice(1).join(" ")}
                            </Text>
                        </View>
                    ))
                }
            </View>


        </ScrollView>
    );
}



const styles = {
    poster: {
        wrapper: "w-full h-[100px] mt-1 p-2 bg-white",
        image: "w-full h-full object-cover rounded-lg",
    },
    cardTitle: {
        wrapper: "w-full flex-row items-center justify-between mb-3",
        title: "text-lg",
        viewAll: "text-gray-500",
    },
    circleCards: {
        wrapper: "flex-row gap-4 py-3 mt-2 items-center justify-center bg-white",
        card: "items-center justify-center",
        image: "w-[70px] h-[70px] aspect-square",
        title: "font-medium tracking-wider",
        subtitle: "font-medium mt-[-2px] tracking-wider",
    },
    mentorCards: {
        wrapper: "bg-white p-4 mt-1",
        mentorCards: "justify-center items-center bg-white w-[100px] mr-4",
        mentorImage: "w-28 h-28 rounded-full border border-blue-400",
        mentorName: "font-medium mt-2",
        priceWrapper: "flex-row items-center justify-center w-full",
        priceText: "text-gray-500 ml-1",
        currencyIcon: "mb-[-2px]",
        chatWrapper: "items-center justify-center mt-2 border pb-2 px-6 rounded-full border-green-500",
        chatText: "text-green-500 mt-2 font-medium",

    },
    blogCards: {
        wrapper: "flex-col items-center mr-4 justify-between p-1 h-[240px] w-[280px]",
        imgAndTitleWrapper: "flex-col items-center justify-center",
        image: "w-full h-[150px] aspect-video rounded-lg",
        title: "text-lg h-14 text-center font-medium mt-2 w-max-full",
        dateAndAuthorWrapper: "flex-row items-end justify-between w-full px-2",
        author: "text-gray-500 text-sm",
        date: "text-gray-500 text-sm",
    },
    btnSection: {
        wrapper: "flex-row items-center justify-around mt-2",
        btnContainer: "flex-row items-center justify-center gap-1 bg-white rounded-full p-5",
        btnTitle: "text-sm font-medium",
    },
    footer: {
        wrapper: "flex-row items-center justify-center gap-14 bg-white p-4 mt-2",
        card: "items-center justify-center",
        image: "w-14 h-14",
        title: "text-sm font-medium mt-1 w-max-full text-center",
        subtitle: "text-sm font-medium mt-[-2px] w-max-full text-center",

    }
}