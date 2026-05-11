import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { User, HardHat, CheckCircle2 } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../utils/colors';
import useStore from '../../store/useStore';

export default function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState(null);
  const { setRole, setAuthenticated } = useStore();

  const handleContinue = () => {
    if (selectedRole) {
      setRole(selectedRole);
      setAuthenticated(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Who are you?</Text>
        <Text style={styles.subtitle}>Choose how you want to use MazdoorHub</Text>
      </View>

      <View style={styles.options}>
        {/* Customer Option */}
        <TouchableOpacity 
          style={[styles.card, selectedRole === 'customer' && styles.cardSelected]}
          onPress={() => setSelectedRole('customer')}
          activeOpacity={0.8}
        >
          {selectedRole === 'customer' && (
            <View style={styles.checkIcon}>
              <CheckCircle2 color={colors.accent} size={24} />
            </View>
          )}
          <View style={[styles.iconBox, { backgroundColor: colors.primaryLight }]}>
            <User color={colors.surface} size={32} />
          </View>
          <Text style={styles.cardTitle}>I am a Customer</Text>
          <Text style={styles.cardSubtitle}>I want to hire skilled workers for my projects or daily needs.</Text>
        </TouchableOpacity>

        {/* Worker Option */}
        <TouchableOpacity 
          style={[styles.card, selectedRole === 'worker' && styles.cardSelected]}
          onPress={() => setSelectedRole('worker')}
          activeOpacity={0.8}
        >
          {selectedRole === 'worker' && (
            <View style={styles.checkIcon}>
              <CheckCircle2 color={colors.accent} size={24} />
            </View>
          )}
          <View style={[styles.iconBox, { backgroundColor: colors.accent }]}>
            <HardHat color={colors.surface} size={32} />
          </View>
          <Text style={styles.cardTitle}>I am a Worker</Text>
          <Text style={styles.cardSubtitle}>I want to find jobs, track hours, and earn money.</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        style={[styles.button, !selectedRole && styles.buttonDisabled]} 
        onPress={handleContinue}
        disabled={!selectedRole}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 24,
  },
  header: {
    marginTop: 20,
    marginBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  options: {
    flex: 1,
    gap: 16,
  },
  card: {
    backgroundColor: colors.surface,
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: 20,
    padding: 24,
    position: 'relative',
  },
  cardSelected: {
    borderColor: colors.accent,
    backgroundColor: 'rgba(249, 115, 22, 0.05)',
  },
  iconBox: {
    width: 64,
    height: 64,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  cardSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  checkIcon: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  button: {
    backgroundColor: colors.accent,
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonDisabled: {
    backgroundColor: colors.accentLight,
    opacity: 0.7,
  },
  buttonText: {
    color: colors.surface,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
