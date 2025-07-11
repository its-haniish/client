import { Image, ScrollView, Text, View } from "react-native";

const mentorCardsData = [
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
const circleCardsData = [
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

export default function App() {
    return (
        <ScrollView>
            {/* top circle navigation  */}
            <View style={{ marginVertical: 5, paddingVertical: 5 }} className="flex-row gap-4 items-center justify-center bg-white">
                {
                    circleCardsData.map((item) => (
                        <View key={item.id} className="items-center justify-center">
                            <Image source={item.image} style={{ width: 70, height: 70 }} className="w-[70px] h-[70px] aspect-square " />
                            <Text className="text-xs text-center font-semibold">
                                {item.title.split(" ")[0]}
                            </Text>
                            <Text className="text-xs text-center">
                                {item.title.split(" ").slice(1).join(" ")}
                            </Text>
                        </View>
                    ))
                }
            </View>
        </ScrollView>
    );
}