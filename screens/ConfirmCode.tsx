import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, PixelRatio, Alert, StyleSheet } from 'react-native';
import CodeInput from '../components/ConfirmCode/CodeInput';
import ConfirmCodeButton from '../components/ConfirmCode/ConfirmCodeButton';
import { useDispatch, useSelector } from 'react-redux';
import { updateReceived } from '../redux/receivedCodeSlice';
import { RootState } from '../redux/store';

const ConfirmCode = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [mockedCode, setMockedCode] = useState<string | null>(null);
    const dispatch = useDispatch();
    const receivedCode = useSelector((state: RootState) => state.receivedCodeSlice.code);

    useEffect(() => {
        fetchCode();
    }, []);

    const fetchCode = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://66b7eea13ce57325ac762578.mockapi.io/get-code/send');
            const data = await response.json();
            setMockedCode(data[0].code); 
            Alert.alert('Code Received', `Your confirmation code is: ${data[0].code}`);
            dispatch(updateReceived(data[0].code))
        } catch (error) {
            Alert.alert('Error', 'Failed to receive the code');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Welcome to App
            </Text>
            <Text style={styles.subtitle}>
                Enter the confirmation code sent to your phone
            </Text>
            <CodeInput />
            <Text style={styles.resendText} onPress={fetchCode}>
                <Text style={styles.resendLink}>Resend the code</Text>
            </Text>
            <ConfirmCodeButton name='Continue'  />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: Dimensions.get('window').height * 0.2,
        paddingHorizontal: Dimensions.get('window').width * 0.1,
    },
    title: {
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
    },
    subtitle: {
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: '400',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
        color: '#787879',
        marginBottom: Dimensions.get('window').height * 0.05,
        marginTop: 5,
    },
    resendText: {
        textAlign: 'center',
        marginVertical: 30,
    },
    resendLink: {
        color: '#46e2a9',
        textDecorationLine: 'underline',
    },
});

export default ConfirmCode;
