import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

// it should be common one so .. passing prop from outside
interface MainButtonProps {
  onPress: () => void;
  title: string;
  loading?: boolean;
  disable?: boolean;
  style?: ViewStyle | ViewStyle[];
}

const MainButon: FC<MainButtonProps> = ({
  onPress,
  title,
  loading,
  disable,
  style,
}) => {
  return (
    <TouchableOpacity 
    // onPress={() => { // logging to to check if button is gettign pressed
    //     console.log("Button Pressed");
    //     if (!disable) onPress();
    // }}
    onPress={onPress}
    disabled={disable}
    style={[styles.cont, disable && {opacity: 0.5}, style]}>
      {loading ? (
        <ActivityIndicator color={Colors.white} />
      ) : (
        <Text style={styles.titleText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default MainButon;

const styles = StyleSheet.create({
  cont: {
    height: 48,
    width: '100%',
    borderRadius: 8,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white,
  },
});
