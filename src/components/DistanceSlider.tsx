// DistanceSlider.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { colors } from '../utils/colors';

interface DistanceSliderProps {
    maxDistance: number;
    currentDistance: number;
    onDistanceChange: (distance: number) => void;
}

function DistanceSlider({ maxDistance, currentDistance, onDistanceChange } : DistanceSliderProps ) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Distancia: {currentDistance} km</Text>
            <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={maxDistance}
                value={currentDistance}
                onValueChange={onDistanceChange}
                minimumTrackTintColor="#1EB1FC"
                maximumTrackTintColor="#d3d3d3"
                thumbTintColor="#1EB1FC"
                step={1}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 8,
        color: colors.black
    },
    slider: {
        width: '100%',        
    },
});

export default React.memo(DistanceSlider);
