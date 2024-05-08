import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

export default function Carousel() {
    const slides = [
        "https://res.cloudinary.com/dbob6dlo0/image/upload/v1715109444/Perfume%20App/slide_01_xaho06.png",
        "https://res.cloudinary.com/dbob6dlo0/image/upload/v1715113687/Perfume%20App/slide_02_jy1noh.png",
        
    ]

    return (
      <View style={styles.carouselContainer}>
        <SliderBox
        images={slides}
        dotColor= "#2A4D50"
        inActiveDotColor = "#DDF0FF"
        ImageComponentStyle={{borderRadius: 15, width: "95%", marginTop: 15}}
        // autoplay
        circleLoop
        />
      </View>
    )
}

const styles = StyleSheet.create({
    carouselContainer: {
        flex: 1,
        alignItems: 'center',
    }
})
