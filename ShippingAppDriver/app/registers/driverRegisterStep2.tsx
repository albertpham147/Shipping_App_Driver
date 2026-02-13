import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import LicensePlateImage from '@/assets/icons/license-plate.png';
import WarrantyImage from '@/assets/icons/medal.png';

export default function DriverRegistrationStep2Screen(){
    const [currentStep, setCurrentStep] = useState(2);
    const router = useRouter();

    // Document upload status
    const [documents, setDocuments] = useState({
        idCard: { uploaded: false, front: null, back: null },
        driverLicense: { uploaded: false, file: null },
        vehicleRegistration: { uploaded: false, file: null },
        insurance: { uploaded: false, file: null },
    });

    // Steps for the registration process
    const steps = [
        { id: 1, label: 'THÔNG TIN', completed: true },
        { id: 2, label: 'GIẤY TỜ', active: true },
        { id: 3, label: 'XÁC MINH', completed: false },
        { id: 4, label: 'HOÀN TẤT', completed: false },
    ];

    // Document items
    const documentItems = [
        {
            id: 'idCard',
            icon: (<AntDesign name="idcard" size={30} color="black" />),
            iconBg: '#FFF7ED',
            title: 'Căn cước công dân (CCCD)',
            subtitle: 'Mặt trước và mặt sau',
        },
        {
            id: 'driverLicense',
            icon: (<FontAwesome name="drivers-license-o" size={30} color="black" />),
            iconBg: '#FFF7ED',
            title: 'Bằng lái xe',
            subtitle: 'Hạng A1/A2 hoặc cao hơn',
        },
        {
            id: 'vehicleRegistration',
            icon: (<Image source={LicensePlateImage} style={{height:40, width: 40}}/>),
            iconBg: '#FFF7ED',
            title: 'Đăng ký xe (Cà vẹt)',
            subtitle: 'Chụp rõ biển số và số khung',
        },
        {
            id: 'insurance',
            icon: (<Image source={WarrantyImage} style={{height:40, width: 40}}/>),
            iconBg: '#FFF7ED',
            title: 'Bảo hiểm xe',
            subtitle: 'Bảo hiểm bắt buộc còn hạn',
        },
    ];

    // Photo tips
    const photoTips = [
        'Đảm bảo ảnh sáng, không bị lóa bởi đèn flash',
        'Giấy tờ nằm gọn trong khung hình, không bị mất góc',
    ];

    const handleUploadDocument = (documentId: string) => {
        console.log('Upload document:', documentId);
        // Handle document upload
        // You would typically use react-native-image-picker or react-native-document-picker here
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
                showsVerticalScrollIndicator={false}
            >
                {/* Form Title */}
                <Text style={styles.formTitle}>Giấy tờ cá nhân</Text>
                <Text style={styles.formSubtitle}>
                    Vui lòng tải lên ảnh chụp bản gốc các giấy tờ sau
                </Text>

                {/* Document Upload Cards */}
                <View style={styles.documentsContainer}>
                    {documentItems.map((doc) => (
                        <View key={doc.id} style={styles.documentCard}>
                            <View style={styles.documentCardContent}>
                                <View style={[styles.documentIcon, { backgroundColor: doc.iconBg }]}>
                                    {/* Icon from the arrays */}
                                    {doc.icon}
                                </View>

                                <View style={styles.documentInfo}>
                                    <Text style={styles.documentTitle}>{doc.title}</Text>
                                    <Text style={styles.documentSubtitle}>{doc.subtitle}</Text>
                                </View>

                                <TouchableOpacity
                                    style={styles.uploadButton}
                                    onPress={() => handleUploadDocument(doc.id)}
                                    >
                                    <Text style={styles.uploadButtonText}>Tải lên</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>

                {/* Photo Tips */}
                <View style={styles.tipsContainer}>
                    <View style={styles.tipsHeader}>
                        <FontAwesome6 name="lightbulb" size={24} color="black" style={styles.tipsIcon}/>
                        <Text style={styles.tipsTitle}>MẸO CHỤP ẢNH</Text>
                    </View>

                    {photoTips.map((tip, index) => (
                        <View key={index} style={styles.tipItem}>
                            <Text style={styles.tipCheckmark}>✓</Text>
                            <Text style={styles.tipText}>{tip}</Text>
                        </View>
                    ))}
                </View>

                {/* Help Link */}
                <View style={styles.helpContainer}>
                    <Text style={styles.helpText}>Cần hỗ trợ? </Text>
                    <TouchableOpacity>
                        <Text style={styles.helpLink}>Liên hệ Tổng đài</Text>
                    </TouchableOpacity>
                </View>

                {/* Add spacing for bottom button */}
                <View style={{ height: 100 }} />
            </ScrollView>

            {/* Continue Button */}
            <View style={styles.bottomButtonContainer}>
                <TouchableOpacity style={styles.continueButton}>
                    <Text style={styles.continueButtonText}>Tiếp theo</Text>
                    <FontAwesome name="long-arrow-right" size={24} color="white"/>
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
    stepCheckmark: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: '700',
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
        fontSize: 28,
        fontWeight: '700',
        color: '#1F2937',
        marginBottom: 8,
    },
    formSubtitle: {
        fontSize: 14,
        color: '#6B7280',
        marginBottom: 24,
    },

    // Documents Container
    documentsContainer: {
        marginBottom: 24,
    },
    documentCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    documentCardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    documentIcon: {
        width: 56,
        height: 56,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    documentIconText: {
        fontSize: 28,
    },
    documentInfo: {
        flex: 1,
    },
    documentTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#1F2937',
        marginBottom: 4,
    },
    documentSubtitle: {
        fontSize: 13,
        color: '#6B7280',
    },
    uploadButton: {
        backgroundColor: '#FFF7ED',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
    },
    uploadButtonText: {
        fontSize: 15,
        fontWeight: '700',
        color: '#FF6B35',
    },

    // Tips Container
    tipsContainer: {
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: '#FED7AA',
        borderStyle: 'dashed',
        borderRadius: 12,
        padding: 16,
        marginBottom: 24,
    },
    tipsHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    tipsIcon: {
        marginRight: 8,
    },
    tipsTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: '#FF6B35',
        letterSpacing: 0.5,
    },
    tipItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 12,
    },
    tipCheckmark: {
        width: 24,
        height: 24,
        backgroundColor: '#FF6B35',
        borderRadius: 12,
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '700',
        textAlign: 'center',
        lineHeight: 24,
        marginRight: 12,
    },
    tipText: {
        flex: 1,
        fontSize: 14,
        color: '#6B7280',
        lineHeight: 20,
    },

    // Help Container
    helpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },
    helpText: {
        fontSize: 15,
        color: '#6B7280',
    },
    helpLink: {
        fontSize: 15,
        color: '#FF6B35',
        fontWeight: '700',
    },

    // Continue Button
    bottomButtonContainer: {
        padding: 16,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#F3F4F6',
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