import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

export default function DriverRegistrationStep3Screen() {
    const [currentStep, setCurrentStep] = useState(3);
    const [photoTaken, setPhotoTaken] = useState(false);

    const router = useRouter();
    // Steps for the registration process
    const steps = [
        { id: 1, label: 'THÔNG TIN', completed: true },
        { id: 2, label: 'GIẤY TỜ', completed: true },
        { id: 3, label: 'XÁC MINH', active: true },
        { id: 4, label: 'HOÀN TẤT', completed: false },
    ];

    // Photo requirements
    const photoRequirements = [
        'Nhìn thẳng vào camera',
        'Không đeo kính râm hoặc khẩu trang',
        'Đảm bảo đủ ánh sáng',
    ];

    const handleTakePhoto = () => {
        console.log('Take photo');
        // Handle camera launch
        // You would use react-native-camera or expo-camera here
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => {router.back();}}>
                    <MaterialIcons name="keyboard-arrow-left" size={36} color="black"/>
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
                                    step.completed && styles.stepCircleCompleted,
                                    step.active && styles.stepCircleActive,
                                ]}>
                                    {step.completed ? (
                                        <AntDesign name="check" size={20} color="white" />
                                    ) : (
                                        <Text style={[
                                            styles.stepNumber,
                                            step.active && styles.stepNumberActive
                                        ]}>
                                            {step.id}
                                        </Text>
                                    )}
                                </View>
                                <Text style={[
                                    styles.stepLabel,
                                    (step.completed || step.active) && styles.stepLabelActive
                                ]}>
                                    {step.label}
                                </Text>
                            </View>

                            {index < steps.length - 1 && (
                                <View style={[
                                    styles.stepConnector,
                                    step.completed && styles.stepConnectorActive
                                ]} />
                            )}
                        </React.Fragment>
                    ))}
                </View>
            </View>

            <ScrollView
                style={styles.content}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Form Title */}
                <Text style={styles.formTitle}>Xác minh danh tính</Text>
                <Text style={styles.formSubtitle}>
                    Vui lòng chụp ảnh chân dung để xác thực khuôn mặt
                </Text>

                {/* Camera Circle */}
                <View style={styles.cameraSection}>
                    <View style={styles.cameraOuterCircle}>
                        <View style={styles.cameraInnerCircle}>
                            <TouchableOpacity
                                style={styles.cameraButton}
                                onPress={handleTakePhoto}
                            >
                                <Entypo name="camera" size={48} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={styles.cameraLabel}>Chạm để chụp</Text>
                </View>

                {/* Photo Requirements */}
                <View style={styles.requirementsContainer}>
                    <Text style={styles.requirementsTitle}>YÊU CẦU HÌNH ẢNH</Text>

                    {photoRequirements.map((requirement, index) => (
                        <View key={index} style={styles.requirementItem}>
                            <View style={styles.requirementCheckmark}>
                                <Text style={styles.requirementCheckmarkIcon}>✓</Text>
                            </View>
                            <Text style={styles.requirementText}>{requirement}</Text>
                        </View>
                    ))}
                </View>

                {/* Help Link */}
                <View style={styles.helpContainer}>
                    <Text style={styles.helpText}>Bạn gặp khó khăn khi xác thực?</Text>
                    <TouchableOpacity>
                        <Text style={styles.helpLink}>Liên hệ Tổng đài hỗ trợ</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* Take Photo Button */}
            <View style={styles.bottomButtonContainer}>
                <TouchableOpacity
                    style={styles.takePhotoButton}
                    onPress={handleTakePhoto}
                >
                    <AntDesign name="camera" size={24} color="white" style={styles.takePhotoIcon}/>
                    <Text style={styles.takePhotoButtonText}>Chụp ảnh</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FAFB',
    },

    // Header
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#FFFFFF',
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
        backgroundColor: '#F9FAFB',
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
    },
    scrollContent: {
        paddingHorizontal: 24,
        paddingBottom: 100,
    },
    formTitle: {
        fontSize: 28,
        fontWeight: '700',
        color: '#1F2937',
        marginBottom: 8,
    },
    formSubtitle: {
        fontSize: 14,
        color: '#6B7280',
        marginBottom: 40,
    },

    // Camera Section
    cameraSection: {
        alignItems: 'center',
        marginBottom: 40,
    },
    cameraOuterCircle: {
        width: 280,
        height: 280,
        borderRadius: 140,
        borderWidth: 3,
        borderColor: '#FED7AA',
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    cameraInnerCircle: {
        width: 240,
        height: 240,
        borderRadius: 120,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cameraButton: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#FFF7ED',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cameraLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FF6B35',
    },

    // Requirements
    requirementsContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 20,
        marginBottom: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    requirementsTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: '#1F2937',
        letterSpacing: 0.5,
        marginBottom: 16,
    },
    requirementItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    requirementCheckmark: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#10B981',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    requirementCheckmarkIcon: {
        fontSize: 14,
        color: '#FFFFFF',
        fontWeight: '700',
    },
    requirementText: {
        flex: 1,
        fontSize: 15,
        color: '#1F2937',
    },

    // Help Container
    helpContainer: {
        alignItems: 'center',
        marginBottom: 24,
    },
    helpText: {
        fontSize: 15,
        color: '#6B7280',
        marginBottom: 8,
        textAlign: 'center',
    },
    helpLink: {
        fontSize: 15,
        color: '#FF6B35',
        fontWeight: '700',
    },

    // Take Photo Button
    bottomButtonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#F3F4F6',
    },
    takePhotoButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        backgroundColor: '#FF6B35',
        borderRadius: 12,
    },
    takePhotoIcon: {
        marginRight: 8,
    },
    takePhotoButtonText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#FFFFFF',
    },
});