import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

export default function Carousel() {
    const slides = [
        "https://images.unsplash.com/photo-1541480551145-2370a440d585?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1604601600542-c751186db4a3?q=80&w=1152&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        
    ]

    return (
      <View style={styles.carouselContainer}>
        <SliderBox
        images={slides}
        dotColor= "#2A4D50"
        inActiveDotColor = "#DDF0FF"
        ImageComponentStyle={{borderRadius: 15, width: "95%", marginTop: 15}}
        autoplay
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
