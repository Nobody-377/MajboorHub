import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Search, ShieldCheck, Wrench, UserCheck, Award, Calendar, Handshake, MapPin } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../utils/colors';

const slides = [
  {
    title: "Find Skilled Workers Instantly",
    subtitle: "Connect with verified plumbers, electricians, carpenters, and more in your area.",
    centerIcon: (color, size) => <Search color={color} size={size} />,
    floatingLeft: (color, size) => <Wrench color={color} size={size} />,
    floatingRight: (color, size) => <MapPin color={color} size={size} />
  },
  {
    title: "Verified & Trustworthy Profiles",
    subtitle: "Every worker on our platform is background-checked and identity-verified for your safety.",
    centerIcon: (color, size) => <ShieldCheck color={color} size={size} />,
    floatingLeft: (color, size) => <UserCheck color={color} size={size} />,
    floatingRight: (color, size) => <Award color={color} size={size} />
  },
  {
    title: "Transparent & Direct Booking",
    subtitle: "Book skilled professionals directly, negotiate rates, and track progress.",
    centerIcon: (color, size) => <Handshake color={color} size={size} />,
    floatingLeft: (color, size) => <Calendar color={color} size={size} />,
    floatingRight: (color, size) => <Wrench color={color} size={size} />
  }
];

export default function Onboarding({ navigation }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current; // Start at 0 to fade in the first slide
  const translateYAnim = useRef(new Animated.Value(10)).current; // Start with a slight offset

  // 1. Autoplay Timer: Resets and counts a fresh 4.5 seconds every time activeIndex changes
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [activeIndex]);

  // 2. Declarative Animation Trigger: Automatically plays the transition animation whenever activeIndex changes
  useEffect(() => {
    fadeAnim.setValue(0);
    translateYAnim.setValue(10);

    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(translateYAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      })
    ]).start();
  }, [activeIndex]);

  const goToSlide = (index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Animated.View 
          style={[
            styles.slideContainer, 
            { 
              opacity: fadeAnim,
              transform: [{ translateY: translateYAnim }] 
            }
          ]}
        >
          <View style={styles.illustrationContainer}>
            <View style={[styles.floatingIcon, { top: 10, right: 10 }]}>
              {slides[activeIndex].floatingRight(colors.success, 32)}
            </View>
            <View style={[styles.floatingIcon, { bottom: 20, left: 0 }]}>
              {slides[activeIndex].floatingLeft(colors.accent, 32)}
            </View>
            <View style={styles.centerIcon}>
              {slides[activeIndex].centerIcon(colors.primary, 64)}
            </View>
          </View>

          <Text style={styles.title}>{slides[activeIndex].title}</Text>
          <Text style={styles.subtitle}>{slides[activeIndex].subtitle}</Text>
        </Animated.View>

        <View style={styles.dotsContainer}>
          {slides.map((_, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => goToSlide(index)}
              style={[
                styles.dot,
                activeIndex === index && styles.activeDot
              ]}
            />
          ))}
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
  slideContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
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
