import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LogOut } from 'lucide-react-native';
import colors from '../../utils/colors';
import useStore from '../../store/useStore';

export default function ProfileScreen() {
  const { setAuthenticated, setRole } = useStore();

  const handleLogout = () => {
    setAuthenticated(false);
    setRole(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>Customer Name</Text>
        <Text style={styles.phone}>+91 98765 43210</Text>
        
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <LogOut color={colors.danger} size={20} />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: { padding: 20, borderBottomWidth: 1, borderBottomColor: colors.border },
  title: { fontSize: 24, fontWeight: 'bold', color: colors.text },
  content: { padding: 20, alignItems: 'center', marginTop: 40 },
  name: { fontSize: 20, fontWeight: 'bold', color: colors.text, marginBottom: 8 },
  phone: { fontSize: 16, color: colors.textSecondary, marginBottom: 40 },
  logoutBtn: { flexDirection: 'row', alignItems: 'center', gap: 8, padding: 16, backgroundColor: colors.surface, borderRadius: 12, borderWidth: 1, borderColor: colors.danger, width: '100%', justifyContent: 'center' },
  logoutText: { color: colors.danger, fontSize: 16, fontWeight: 'bold' }
});
