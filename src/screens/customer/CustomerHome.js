import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, MapPin, Bell, Star, Wrench, Zap, PaintRoller, Hammer } from 'lucide-react-native';
import colors from '../../utils/colors';

const CATEGORIES = [
  { id: 'plumber', name: 'Plumber', icon: Wrench, color: '#3B82F6' },
  { id: 'electrician', name: 'Electrician', icon: Zap, color: '#F59E0B' },
  { id: 'painter', name: 'Painter', icon: PaintRoller, color: '#10B981' },
  { id: 'carpenter', name: 'Carpenter', icon: Hammer, color: '#8B5CF6' },
];

const NEARBY_WORKERS = [
  { id: 1, name: 'Ramesh Kumar', skill: 'Expert Plumber', rating: 4.8, distance: '1.2 km', price: '₹400/hr', verified: true },
  { id: 2, name: 'Suresh Singh', skill: 'Master Electrician', rating: 4.9, distance: '2.5 km', price: '₹450/hr', verified: true },
];

export default function CustomerHome({ navigation }) {
  return (
    <ScrollView style={styles.container} bounces={false}>
      {/* Header Area */}
      <View style={styles.headerBg}>
        <SafeAreaView edges={['top']}>
          <View style={styles.headerTop}>
            <View>
              <Text style={styles.locationLabel}>Current Location</Text>
              <View style={styles.locationRow}>
                <MapPin size={16} color={colors.accent} />
                <Text style={styles.locationText}>Andheri West, Mumbai</Text>
              </View>
            </View>
            <View>
              <Bell size={24} color={colors.surface} />
              <View style={styles.notificationDot} />
            </View>
          </View>

          <TouchableOpacity 
            style={styles.searchBar}
            activeOpacity={0.9}
            onPress={() => navigation.navigate('Search')}
          >
            <Search size={20} color={colors.textLight} />
            <Text style={styles.searchText}>Search for plumbers, electricians...</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>

      {/* Categories */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>
        <View style={styles.categoriesRow}>
          {CATEGORIES.map(cat => (
            <TouchableOpacity key={cat.id} style={styles.categoryItem} onPress={() => navigation.navigate('Search')}>
              <View style={[styles.categoryIconBg, { backgroundColor: `${cat.color}15` }]}>
                <cat.icon size={28} color={cat.color} />
              </View>
              <Text style={styles.categoryName}>{cat.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Special Offer Banner */}
      <View style={[styles.section, { paddingTop: 0 }]}>
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>Get 20% Off</Text>
          <Text style={styles.bannerSub}>On your first booking today!</Text>
          <TouchableOpacity style={styles.bannerBtn}>
            <Text style={styles.bannerBtnText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Top Rated Workers */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Nearby Top Rated</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>
        <View style={styles.workersList}>
          {NEARBY_WORKERS.map(worker => (
            <TouchableOpacity 
              key={worker.id} 
              style={styles.workerCard}
              onPress={() => navigation.navigate('WorkerProfile', { id: worker.id })}
            >
              <View style={styles.avatarPlaceholder} />
              <View style={styles.workerInfo}>
                <View style={styles.workerHeader}>
                  <Text style={styles.workerName}>{worker.name}</Text>
                  {worker.verified && (
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>Verified</Text>
                    </View>
                  )}
                </View>
                <Text style={styles.workerSkill}>{worker.skill}</Text>
                
                <View style={styles.workerStatsRow}>
                  <View style={styles.stat}>
                    <Star size={14} color={colors.warning} fill={colors.warning} />
                    <Text style={styles.statText}>{worker.rating}</Text>
                  </View>
                  <View style={styles.stat}>
                    <MapPin size={14} color={colors.textLight} />
                    <Text style={[styles.statText, { color: colors.textSecondary }]}>{worker.distance}</Text>
                  </View>
                </View>
                <Text style={styles.price}>{worker.price}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerBg: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingBottom: 30,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 10,
  },
  locationLabel: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 12,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 2,
  },
  locationText: {
    color: colors.surface,
    fontWeight: 'bold',
    fontSize: 16,
  },
  notificationDot: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 10,
    height: 10,
    backgroundColor: colors.danger,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    paddingHorizontal: 16,
    height: 50,
    borderRadius: 16,
    gap: 12,
  },
  searchText: {
    color: colors.textLight,
    fontSize: 15,
  },
  section: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
  },
  seeAll: {
    color: colors.accent,
    fontWeight: 'bold',
    fontSize: 14,
  },
  categoriesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryItem: {
    alignItems: 'center',
    gap: 8,
  },
  categoryIconBg: {
    width: 64,
    height: 64,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryName: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  banner: {
    backgroundColor: colors.accent,
    borderRadius: 20,
    padding: 20,
  },
  bannerTitle: {
    color: colors.surface,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  bannerSub: {
    color: 'rgba(255,255,255,0.9)',
    marginBottom: 16,
  },
  bannerBtn: {
    backgroundColor: colors.surface,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  bannerBtnText: {
    color: colors.accent,
    fontWeight: 'bold',
  },
  workersList: {
    gap: 16,
  },
  workerCard: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    gap: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 16,
    backgroundColor: colors.border,
  },
  workerInfo: {
    flex: 1,
  },
  workerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  workerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
  },
  badge: {
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  badgeText: {
    color: '#1E40AF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  workerSkill: {
    color: colors.textSecondary,
    fontSize: 13,
    marginTop: 2,
  },
  workerStatsRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
  },
  price: {
    marginTop: 8,
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 15,
  },
});
