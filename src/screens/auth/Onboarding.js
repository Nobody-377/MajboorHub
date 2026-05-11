import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Search, ShieldCheck, Wrench } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../utils/colors';

export default function Onboarding({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.illustrationContainer}>
          <View style={[styles.floatingIcon, { top: 10, right: 10 }]}>
            <ShieldCheck color={colors.success} size={32} />
          </View>
          <View style={[styles.floatingIcon, { bottom: 20, left: 0 }]}>
            <Wrench color={colors.accent} size={32} />
          </View>
          <View style={styles.centerIcon}>
            <Search color={colors.primary} size={64} />
          </View>
        </View>

        <Text style={styles.title}>Find Skilled Workers instantly</Text>
        <Text style={styles.subtitle}>
          Connect with verified plumbers, electricians, carpenters, and more in your area.
        </Text>

        <View style={styles.dotsContainer}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('OTPLogin')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
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
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustrationContainer: {
    width: 240,
    height: 240,
    backgroundColor: colors.primaryLight,
    borderRadius: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  floatingIcon: {
    position: 'absolute',
    backgroundColor: colors.surface,
    padding: 16,
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  centerIcon: {
    backgroundColor: colors.surface,
    padding: 32,
    borderRadius: 32,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 15,
    zIndex: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
  },
  dotsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.border,
  },
  activeDot: {
    width: 24,
    backgroundColor: colors.primary,
  },
  button: {
    backgroundColor: colors.accent,
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 4,
    shadowColor: colors.accent,
    shadowOpacity: 0.3,
    shadowRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: colors.surface,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
