import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, MapPin, Clock, Check, X } from 'lucide-react-native';
import colors from '../../utils/colors';

export default function JobRequests({ navigation }) {
  const [requests, setRequests] = useState([
    { id: 1, title: 'Water tank installation', customer: 'Vikram Singh', distance: '2.5 km', time: 'Today, 2:00 PM', price: '₹600', status: 'pending' },
    { id: 2, title: 'Kitchen sink repair', customer: 'Meera Patel', distance: '4.1 km', time: 'Tomorrow, 10:00 AM', price: '₹300', status: 'pending' },
    { id: 3, title: 'Full home plumbing check', customer: 'Rajesh Gupta', distance: '1.8 km', time: 'Tomorrow, 4:00 PM', price: '₹1200', status: 'pending' },
  ]);

  const handleAction = (id, action) => {
    setRequests(requests.filter(req => req.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <ChevronLeft color={colors.text} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Job Requests</Text>
      </View>

      <View style={styles.tabsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabsScroll}>
          <View style={[styles.tab, styles.tabActive]}><Text style={styles.tabTextActive}>New (3)</Text></View>
          <View style={styles.tab}><Text style={styles.tabText}>Accepted</Text></View>
          <View style={styles.tab}><Text style={styles.tabText}>Completed</Text></View>
        </ScrollView>
      </View>

      <ScrollView contentContainerStyle={styles.listContainer}>
        {requests.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No new requests.</Text>
          </View>
        ) : (
          requests.map(req => (
            <View key={req.id} style={styles.card}>
              <View style={styles.cardHeader}>
                <View>
                  <Text style={styles.cardTitle}>{req.title}</Text>
                  <Text style={styles.cardCustomer}>{req.customer}</Text>
                </View>
                <Text style={styles.cardPrice}>{req.price}</Text>
              </View>

              <View style={styles.details}>
                <View style={styles.detailRow}>
                  <Clock size={16} color={colors.textSecondary} />
                  <Text style={styles.detailText}>{req.time}</Text>
                </View>
                <View style={styles.detailRow}>
                  <MapPin size={16} color={colors.textSecondary} />
                  <Text style={styles.detailText}>{req.distance} away</Text>
                </View>
              </View>

              <View style={styles.actions}>
                <TouchableOpacity 
                  style={styles.btnDecline}
                  onPress={() => handleAction(req.id, 'reject')}
                >
                  <X size={18} color={colors.danger} />
                  <Text style={styles.btnDeclineText}>Decline</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.btnAccept}
                  onPress={() => handleAction(req.id, 'accept')}
                >
                  <Check size={18} color={colors.surface} />
                  <Text style={styles.btnAcceptText}>Accept</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 16, gap: 16 },
  backBtn: { width: 40, height: 40, backgroundColor: colors.surface, borderRadius: 12, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: colors.border },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: colors.text },
  tabsContainer: { marginBottom: 16 },
  tabsScroll: { paddingHorizontal: 20, gap: 8 },
  tab: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border },
  tabActive: { backgroundColor: colors.primary, borderColor: colors.primary },
  tabText: { color: colors.textSecondary, fontWeight: '500', fontSize: 14 },
  tabTextActive: { color: colors.surface, fontWeight: '600', fontSize: 14 },
  listContainer: { padding: 20, paddingTop: 0, gap: 16 },
  emptyState: { alignItems: 'center', justifyContent: 'center', paddingVertical: 40 },
  emptyText: { color: colors.textSecondary, fontSize: 16 },
  card: { backgroundColor: colors.surface, borderRadius: 16, padding: 16, elevation: 2, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: colors.text },
  cardCustomer: { fontSize: 14, color: colors.textSecondary, marginTop: 2 },
  cardPrice: { fontSize: 16, fontWeight: 'bold', color: colors.primary },
  details: { gap: 8, marginBottom: 16 },
  detailRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  detailText: { fontSize: 14, color: colors.textSecondary },
  actions: { flexDirection: 'row', gap: 12 },
  btnDecline: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.surface, paddingVertical: 12, borderRadius: 12, borderWidth: 1, borderColor: colors.danger, gap: 8 },
  btnDeclineText: { color: colors.danger, fontWeight: 'bold', fontSize: 14 },
  btnAccept: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.success, paddingVertical: 12, borderRadius: 12, gap: 8 },
  btnAcceptText: { color: colors.surface, fontWeight: 'bold', fontSize: 14 },
});
