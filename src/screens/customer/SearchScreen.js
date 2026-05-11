import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, Search as SearchIcon, Filter, Star, MapPin } from 'lucide-react-native';
import colors from '../../utils/colors';

const CATEGORIES = ['All', 'Plumber', 'Electrician', 'Painter', 'Mason', 'Carpenter'];

const ALL_WORKERS = [
  { id: 1, name: 'Ramesh Kumar', skill: 'Expert Plumber', rating: 4.8, distance: '1.2 km', price: '₹400/hr' },
  { id: 2, name: 'Suresh Singh', skill: 'Master Electrician', rating: 4.9, distance: '2.5 km', price: '₹450/hr' },
];

export default function SearchScreen({ navigation }) {
  const [activeCat, setActiveCat] = useState('All');

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <ChevronLeft color={colors.text} size={24} />
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <SearchIcon size={20} color={colors.textLight} />
          <TextInput 
            style={styles.searchInput} 
            placeholder="Search workers..." 
            autoFocus
          />
        </View>
        <TouchableOpacity style={styles.filterBtn}>
          <Filter color={colors.surface} size={20} />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesScroll}>
          {CATEGORIES.map(cat => (
            <TouchableOpacity 
              key={cat} 
              style={[styles.categoryPill, activeCat === cat && styles.categoryPillActive]}
              onPress={() => setActiveCat(cat)}
            >
              <Text style={[styles.categoryText, activeCat === cat && styles.categoryTextActive]}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Results */}
      <ScrollView contentContainerStyle={styles.resultsContainer}>
        <Text style={styles.resultsTitle}>Results ({ALL_WORKERS.length})</Text>
        
        {ALL_WORKERS.map(worker => (
          <TouchableOpacity 
            key={worker.id} 
            style={styles.workerCard}
            onPress={() => navigation.navigate('WorkerProfile', { id: worker.id })}
          >
            <View style={styles.avatarPlaceholder} />
            <View style={styles.workerInfo}>
              <Text style={styles.workerName}>{worker.name}</Text>
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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 12,
  },
  backBtn: {
    width: 40,
    height: 40,
    backgroundColor: colors.surface,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    paddingHorizontal: 16,
    height: 44,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
  },
  filterBtn: {
    width: 44,
    height: 44,
    backgroundColor: colors.primary,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoriesScroll: {
    paddingHorizontal: 20,
    gap: 8,
    paddingBottom: 16,
  },
  categoryPill: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  categoryPillActive: {
    backgroundColor: colors.accent,
    borderColor: colors.accent,
  },
  categoryText: {
    color: colors.textSecondary,
    fontWeight: '600',
  },
  categoryTextActive: {
    color: colors.surface,
  },
  resultsContainer: {
    padding: 20,
    paddingTop: 0,
    gap: 16,
  },
  resultsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
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
  workerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
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
