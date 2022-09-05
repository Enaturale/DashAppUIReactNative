import { Text, View, FlatList, SafeAreaView, Image, StyleSheet, Dimensions, } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'


export const SLIDER_WIDTH = Dimensions.get('window').width - 20
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.36)

const RenderDash = ({index,item}) => {
    return (
        <View style={[styles.container, ]} key={index}>
            <Text style={styles.header}>{item.title}</Text>
            <Text style={styles.body}>{item.desc}</Text>
            <Image
                source={{ uri: item.image }}
                // containerStyle={styles.imageContainer}
                style={styles.image}
            />
            <Text style={styles.body}>{item.price}</Text>

        </View>
    )

}
const DashboardCarousel = ({ data }) => {
    const isCarousel = React.useRef(null)
    const [slideIndex, setSlideIndex] = React.useState(0);

    return (
        <View>
            {/* <Carousel
                layout="default"
                // 
                ref={isCarousel}
                data={data}
                renderItem={renderDash}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                // inactiveSlideShift={0}
                useScrollView={true}
                hasParallaxImages={true}
                onSnapToItem={(index) => setSlideIndex(index)}

            /> */}

<FlatList
                data={data}
                horizontal
                pagingEnabled
                renderItem={({ data }) => <RenderDash data={data}  />}
            />
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 8,
        width: ITEM_WIDTH,
        paddingBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,

        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginHorizontal: 60,
        marginLeft: -90,

    },
    image: {
        width: ITEM_WIDTH,
        height: 100,
    },
    imageContainer: {
        flex: 3,
        borderRadius: 20,
        marginBottom: Platform.select({ ios: 0, android: 1 }),
        marginTop: 15,
        //marginLeft: 85,
    },
    header: {
        color: "#222",
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: 20,
        paddingTop: 20,
        fontFamily: 'Segoe UI Bold',
    },
    body: {
        color: "#222",
        fontSize: 15,
        paddingLeft: 20,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: 'Segoe UI',

    }
})

export default DashboardCarousel;