import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Camera, LogOut } from 'lucide-react-native';
import colors from '../../utils/colors';
import useStore from '../../store/useStore';

export default function WorkerProfileEdit() {
  const { setAuthenticated, setRole } = useStore();
  const [skill, setSkill] = useState('Plumber');
  const [hourly, setHourly] = useState('400');
  const [daily, setDaily] = useState('1200');

  const handleLogout = () => {
    setAuthenticated(false);
    setRole(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Edit Profile</Text>
      </View>
      
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.avatarSection}>
          <View style={styles.avatar}>
            <Camera color={colors.surface} size={24} style={styles.cameraIcon} />
          </View>
          <Text style={styles.changePhoto}>Change Photo</Text>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput style={styles.input} value="Ramesh Kumar" editable={false} />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Primary Skill</Text>
          <TextInput style={styles.input} value={skill} onChangeText={setSkill} />
        </View>

        <Text style={styles.sectionTitle}>Pricing Details</Text>
        
        <View style={styles.priceRow}>
          <View style={[styles.inputGroup, { flex: 1 }]}>
            <Text style={styles.label}>Hourly Rate (₹)</Text>
            <TextInput style={styles.input} value={hourly} onChangeText={setHourly} keyboardType="numeric" />
          </View>
          <View style={[styles.inputGroup, { flex: 1 }]}>
            <Text style={styles.label}>Daily Rate (₹)</Text>
            <TextInput style={styles.input} value={daily} onChangeText={setDaily} keyboardType="numeric" />
          </View>
        </View>

        <TouchableOpacity style={styles.saveBtn}>
          <Text style={styles.saveBtnText}>Save Changes</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <LogOut color={colors.danger} size={20} />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: { padding: 20, borderBottomWidth: 1, borderBottomColor: colors.border },
  title: { fontSize: 24, fontWeight: 'bold', color: colors.text },
  content: { padding: 20 },
  avatarSection: { alignItems: 'center', marginBottom: 24 },
  avatar: { width: 100, height: 100, borderRadius: 50, backgroundColor: colors.border, alignItems: 'center', justifyContent: 'center' },
  cameraIcon: { position: 'absolute', bottom: 10, right: 10, backgroundColor: colors.primary, padding: 6, borderRadius: 16, overflow: 'hidden' },
  changePhoto: { color: colors.accent, fontWeight: 'bold', marginTop: 12 },
  inputGroup: { marginBottom: 20 },
  label: { fontSize: 14, fontWeight: '600', color: colors.textSecondary, marginBottom: 8 },
  input: { backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, borderRadius: 12, paddingHorizontal: 16, height: 50, fontSize: 15 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: colors.text, marginTop: 10, marginBottom: 16 },
  priceRow: { flexDirection: 'row', gap: 16 },
  saveBtn: { backgroundColor: colors.accent, paddingVertical: 18, borderRadius: 16, alignItems: 'center', marginTop: 16 },
  saveBtnText: { color: colors.surface, fontSize: 18, fontWeight: 'bold' },
  divider: { height: 1, backgroundColor: colors.border, marginVertical: 32 },
  logoutBtn: { flexDirection: 'row', alignItems: 'center', gap: 8, padding: 16, backgroundColor: colors.surface, borderRadius: 12, borderWidth: 1, borderColor: colors.danger, justifyContent: 'center' },
  logoutText: { color: colors.danger, fontSize: 16, fontWeight: 'bold' }
});
