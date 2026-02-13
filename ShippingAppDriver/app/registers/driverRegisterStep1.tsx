import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function DriverInformationRegistration() {
    const [currentStep, setCurrentStep] = useState(1);
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [vehicleType, setVehicleType] = useState('motorbike'); // motorbike or car
    const [selectedRegion, setSelectedRegion] = useState('');
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    const router = useRouter();

    // Steps for the registration process
    const steps = [
        { id: 1, label: 'THÔNG TIN' },
        { id: 2, label: 'GIẤY TỜ' },
        { id: 3, label: 'XÁC MINH' },
        { id: 4, label: 'HOÀN TẤT' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => { router.back() }}>
                    <MaterialIcons name="keyboard-arrow-left" size={36} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Đăng ký Tài xế</Text>
                <View style={styles.headerSpacer} />
            </View>

            {/* Progress Steps */}
            <View style={styles.stepsContainer}>
                <View style={styles.stepsLine}>
                    {steps.map((step, index) => (
                        <React.Fragment key={step.id}>
                            <View style={styles.stepWrapper}>
                                <View style={[
                                    styles.stepCircle,
                                    currentStep >= step.id && styles.stepCircleActive,
                                    currentStep > step.id && styles.stepCircleCompleted
                                ]}>
                                    <Text style={[
                                        styles.stepNumber,
                                        currentStep >= step.id && styles.stepNumberActive
                                    ]}>
                                        {step.id}
                                    </Text>
                                </View>
                                <Text style={[
                                    styles.stepLabel,
                                    currentStep >= step.id && styles.stepLabelActive
                                ]}>
                                    {step.label}
                                </Text>
                            </View>

                            {index < steps.length - 1 && (
                                <View style={[
                                    styles.stepConnector,
                                    currentStep > step.id && styles.stepConnectorActive
                                ]} />
                            )}
                        </React.Fragment>
                    ))}
                </View>
            </View>

            <ScrollView
                style={styles.content}
                showsVerticalScrollIndicator={false}
            >
                {/* Form Title */}
                <Text style={styles.formTitle}>Thông tin cá nhân</Text>
                <Text style={styles.formSubtitle}>
                    Vui lòng điền thông tin chính xác theo CCCD
                </Text>

                {/* Full Name Input */}
                <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Họ và tên</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập họ và tên đầy đủ"
                        placeholderTextColor="#9CA3AF"
                        value={fullName}
                        onChangeText={setFullName}
                    />
                </View>

                {/* Phone Number Input */}
                <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Số điện thoại</Text>
                    <View style={styles.phoneInputContainer}>
                        <Text style={styles.countryCode}>+84</Text>
                        <TextInput
                            style={styles.phoneInput}
                            placeholder="Nhập số điện thoại"
                            placeholderTextColor="#9CA3AF"
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                            keyboardType="phone-pad"
                        />
                    </View>
                </View>

                {/* Vehicle Type Selection */}
                <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Loại phương tiện</Text>
                    <View style={styles.vehicleTypeContainer}>
                        <TouchableOpacity
                            style={[
                                styles.vehicleTypeButton,
                                vehicleType === 'motorbike' && styles.vehicleTypeButtonActive
                            ]}
                            onPress={() => setVehicleType('motorbike')}
                        >
                            <FontAwesome name="motorcycle" size={30} color="black" style={styles.vehicleIcon} />
                            <Text style={[
                                styles.vehicleTypeText,
                                vehicleType === 'motorbike' && styles.vehicleTypeTextActive
                            ]}>
                                Xe máy
                            </Text>
                            {vehicleType === 'motorbike' && (
                                <View style={styles.checkmark}>
                                    <FontAwesome6 name="check" size={12} color="white" style={styles.checkmarkIcon} />
                                </View>
                            )}
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[
                                styles.vehicleTypeButton,
                                vehicleType === 'car' && styles.vehicleTypeButtonActive
                            ]}
                            onPress={() => setVehicleType('car')}
                        >
                            <FontAwesome name="car" size={30} color="black" style={styles.vehicleIcon} />
                            <Text style={[
                                styles.vehicleTypeText,
                                vehicleType === 'car' && styles.vehicleTypeTextActive
                            ]}>
                                Ô tô
                            </Text>
                            {vehicleType === 'car' && (
                                <View style={styles.checkmark}>
                                    <FontAwesome6 name="check" size={12} color="white" style={styles.checkmarkIcon} />
                                </View>
                            )}
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Region Dropdown */}
                <View style={styles.inputGroup}>
                    <Text style={styles.inputLabel}>Khu vực hoạt động</Text>
                    <TouchableOpacity style={styles.dropdown}>
                        <Text style={styles.dropdownText}>
                            {selectedRegion || 'Chọn khu vực của bạn'}
                        </Text>
                        <MaterialIcons name="keyboard-arrow-down" size={24} color='#6B7280' />
                    </TouchableOpacity>
                </View>

                {/* Terms and Conditions Checkbox */}
                <TouchableOpacity
                    style={styles.checkboxContainer}
                    onPress={() => setAgreeToTerms(!agreeToTerms)}
                >
                    <View style={[styles.checkbox, agreeToTerms && styles.checkboxChecked]}>
                        {agreeToTerms && <Text style={styles.checkboxCheck}>✓</Text>}
                    </View>
                    <Text style={styles.checkboxText}>
                        Tôi đồng ý với{' '}
                        <Text style={styles.linkText}>điều khoản dịch vụ</Text>
                        {' '}và chính sách bảo mật của ứng dụng.
                    </Text>
                </TouchableOpacity>

                {/* Login Link */}
                <View style={styles.loginContainer}>
                    <Text style={styles.loginText}>Bạn đã có tài khoản?</Text>
                    <TouchableOpacity onPress={() => { router.push('/driverLogin') }}>
                        <Text style={styles.loginLink}>Đăng nhập ngay</Text>
                    </TouchableOpacity>
                </View>

                {/* Add spacing for bottom button */}
                <View style={{ height: 100 }} />
            </ScrollView>

            {/* Continue Button */}
            <View style={styles.bottomButtonContainer}>
                <TouchableOpacity style={styles.continueButton}>
                    <Text style={styles.continueButtonText}>Tiếp theo</Text>
                    <AntDesign name="arrow-right" size={20} color="white" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    // Header
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F4F6',
    },
    backButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1F2937',
        flex: 1,
        textAlign: 'center',
    },
    headerSpacer: {
        width: 40,
    },

    // Progress Steps
    stepsContainer: {
        paddingHorizontal: 16,
        paddingVertical: 24,
        backgroundColor: '#FFFFFF',
    },
    stepsLine: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    stepWrapper: {
        alignItems: 'center',
    },
    stepCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#E5E7EB',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    stepCircleActive: {
        backgroundColor: '#FF6B35',
    },
    stepCircleCompleted: {
        backgroundColor: '#FF6B35',
    },
    stepNumber: {
        fontSize: 16,
        fontWeight: '700',
        color: '#9CA3AF',
    },
    stepNumberActive: {
        color: '#FFFFFF',
    },
    stepLabel: {
        fontSize: 11,
        fontWeight: '600',
        color: '#9CA3AF',
    },
    stepLabelActive: {
        color: '#FF6B35',
    },
    stepConnector: {
        flex: 1,
        height: 2,
        backgroundColor: '#E5E7EB',
        marginHorizontal: 4,
        marginBottom: 32,
    },
    stepConnectorActive: {
        backgroundColor: '#FF6B35',
    },

    // Content
    content: {
        flex: 1,
        paddingHorizontal: 24,
    },
    formTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#1F2937',
        marginBottom: 8,
    },
    formSubtitle: {
        fontSize: 14,
        color: '#6B7280',
        marginBottom: 24,
    },

    // Input Groups
    inputGroup: {
        marginBottom: 24,
    },
    inputLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1F2937',
        marginBottom: 8,
    },
    input: {
        height: 56,
        backgroundColor: '#F9FAFB',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#1F2937',
    },

    // Phone Input
    phoneInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 56,
        backgroundColor: '#F9FAFB',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 12,
        paddingHorizontal: 16,
    },
    countryCode: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1F2937',
        marginRight: 12,
    },
    phoneInput: {
        flex: 1,
        fontSize: 16,
        color: '#1F2937',
    },

    // Vehicle Type
    vehicleTypeContainer: {
        flexDirection: 'row',
        gap: 12,
    },
    vehicleTypeButton: {
        flex: 1,
        height: 120,
        backgroundColor: '#F9FAFB',
        borderWidth: 2,
        borderColor: '#E5E7EB',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    vehicleTypeButtonActive: {
        backgroundColor: '#FFF7ED',
        borderColor: '#FF6B35',
    },
    vehicleIcon: {
        marginBottom: 12,
    },
    vehicleTypeText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#6B7280',
    },
    vehicleTypeTextActive: {
        color: '#FF6B35',
    },
    checkmark: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 24,
        height: 24,
        backgroundColor: '#FF6B35',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkmarkIcon: {
        color: '#FFFFFF',
    },

    // Dropdown
    dropdown: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 56,
        backgroundColor: '#F9FAFB',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 12,
        paddingHorizontal: 16,
    },
    dropdownText: {
        fontSize: 16,
        color: '#9CA3AF',
    },

    // Checkbox
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 24,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderColor: '#D1D5DB',
        borderRadius: 6,
        marginRight: 12,
        marginTop: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxChecked: {
        backgroundColor: '#FF6B35',
        borderColor: '#FF6B35',
    },
    checkboxCheck: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '700',
    },
    checkboxText: {
        flex: 1,
        fontSize: 14,
        color: '#6B7280',
        lineHeight: 20,
    },
    linkText: {
        color: '#FF6B35',
        fontWeight: '600',
    },

    // Login Link
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },
    loginText: {
        fontSize: 15,
        color: '#6B7280',
        marginRight: 4,
    },
    loginLink: {
        fontSize: 15,
        color: '#FF6B35',
        fontWeight: '700',
    },

    // Continue Button
    bottomButtonContainer: {
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#F3F4F6',
        backgroundColor: '#FFFFFF',
    },
    continueButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        backgroundColor: '#FF6B35',
        borderRadius: 12,
    },
    continueButtonText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#FFFFFF',
        marginRight: 8,
    },
});
