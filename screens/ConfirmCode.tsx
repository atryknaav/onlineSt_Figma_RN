import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, PixelRatio, Alert } from 'react-native';
import CodeInput from '../components/ConfirmCode/CodeInput';
import ConfirmCodeButton from '../components/ConfirmCode/ConfirmCodeButton';

const ConfirmCode = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [mockedCode, setMockedCode] = useState<string | null>(null);

    useEffect(() => {
        fetchCode();
    }, []);

    const fetchCode = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://demo.mockable.io/your-mock-endpoint');
            const data = await response.json();
            setMockedCode(data.code); 
            Alert.alert('Mocked Code Received', `A code has been sent to your phone number.`);
        } catch (error) {
            Alert.alert('Error', 'Failed to receive the code');
        } finally {
            setIsLoading(false);
        }
    };

    const handleCodeComplete = (code: string) => {
        if (code === mockedCode) {
            Alert.alert('Success', 'Code verified successfully!');
        
        } else {
            Alert.alert('Error', 'Incorrect code. Please try again.');
        }
    };

    return (
        <View style={{display: 'flex', flexDirection: 'column', marginTop: Dimensions.get('window').height*0.15, paddingHorizontal: Dimensions.get('window').width*0.1}}>
            <Text style={{alignItems: 'center', textAlign: 'center', fontWeight: 700, fontSize: PixelRatio.getPixelSizeForLayoutSize(10)}}>
                Welcome to App
            </Text>
            <Text style={{alignItems: 'center', textAlign: 'center', fontWeight: 400, fontSize: PixelRatio.getPixelSizeForLayoutSize(6), color: '#787879', marginBottom: Dimensions.get('window').height*0.05, marginTop: 5}}>
                Enter the confirmation code sent to your phone
            </Text>
            <CodeInput onCodeComplete={handleCodeComplete} />
            <Text style={{textAlign: 'center', marginVertical: 30}} onPress={fetchCode}>
                <Text style={{color: '#46e2a9', textDecorationLine: 'underline'}}>Resend the code</Text>
            </Text>
            <ConfirmCodeButton textColor='white' backgroundColor='#3aa3dc' name='Continue' border={false} />
        </View>
    );
}

export default ConfirmCode;