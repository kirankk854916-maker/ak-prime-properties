import { StatusBar } from 'expo-status-bar';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />

      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.brand}>AK PRIME</Text>
            <Text style={styles.brandSub}>PROPERTIES</Text>
          </View>

          <Pressable style={styles.menuButton}>
            <Text style={styles.menuText}>☰</Text>
          </Pressable>
        </View>

        {/* Hero */}
        <View style={styles.hero}>
          <Text style={styles.heroSmall}>WHERE PROPERTY MEETS TRUST.</Text>

          <Text style={styles.heroTitle}>
            Find Your{'\n'}
            <Text style={styles.goldText}>Perfect Property</Text>
          </Text>

          <Text style={styles.heroDescription}>
            Premium properties, trusted guidance and professional
            property documentation services in Bangalore.
          </Text>

          <Pressable style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>EXPLORE PROPERTIES</Text>
          </Pressable>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What are you looking for?</Text>

          <View style={styles.actionGrid}>
            <Pressable style={styles.actionCard}>
              <Text style={styles.actionIcon}>⌂</Text>
              <Text style={styles.actionTitle}>BUY</Text>
              <Text style={styles.actionText}>Find a property</Text>
            </Pressable>

            <Pressable style={styles.actionCard}>
              <Text style={styles.actionIcon}>◆</Text>
              <Text style={styles.actionTitle}>SELL</Text>
              <Text style={styles.actionText}>List your property</Text>
            </Pressable>

            <Pressable style={styles.actionCard}>
              <Text style={styles.actionIcon}>▣</Text>
              <Text style={styles.actionTitle}>REGISTRATION</Text>
              <Text style={styles.actionText}>Property documentation</Text>
            </Pressable>

            <Pressable style={styles.actionCard}>
              <Text style={styles.actionIcon}>☎</Text>
              <Text style={styles.actionTitle}>CONTACT</Text>
              <Text style={styles.actionText}>Talk to our team</Text>
            </Pressable>
          </View>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Explore Properties</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryRow}
          >
            <Pressable style={styles.categoryCard}>
              <Text style={styles.categoryTitle}>Residential Sites</Text>
              <Text style={styles.categoryCount}>Premium plots</Text>
            </Pressable>

            <Pressable style={styles.categoryCard}>
              <Text style={styles.categoryTitle}>Lands</Text>
              <Text style={styles.categoryCount}>Open land</Text>
            </Pressable>

            <Pressable style={styles.categoryCard}>
              <Text style={styles.categoryTitle}>Apartments</Text>
              <Text style={styles.categoryCount}>Modern living</Text>
            </Pressable>

            <Pressable style={styles.categoryCard}>
              <Text style={styles.categoryTitle}>Villas</Text>
              <Text style={styles.categoryCount}>Luxury homes</Text>
            </Pressable>

            <Pressable style={styles.categoryCard}>
              <Text style={styles.categoryTitle}>Commercial</Text>
              <Text style={styles.categoryCount}>Business spaces</Text>
            </Pressable>
          </ScrollView>
        </View>

        {/* Trust section */}
        <View style={styles.trustCard}>
          <Text style={styles.trustLabel}>AK PRIME PROPERTIES</Text>
          <Text style={styles.trustTitle}>Property. Documentation. Trust.</Text>
          <Text style={styles.trustText}>
            Professional assistance for property buying, selling,
            registration and documentation.
          </Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerBrand}>AK PRIME PROPERTIES</Text>
          <Text style={styles.footerTagline}>Where Property Meets Trust.</Text>
          <Text style={styles.footerLocation}>
            Bangalore & Surrounding Areas
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#071A33',
  },

  container: {
    flex: 1,
    backgroundColor: '#F8F6F0',
  },

  content: {
    paddingBottom: 40,
  },

  header: {
    backgroundColor: '#071A33',
    paddingHorizontal: 24,
    paddingTop: 22,
    paddingBottom: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  brand: {
    color: '#D4AF37',
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: 2,
  },

  brandSub: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 4,
    marginTop: 2,
  },

  menuButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#D4AF37',
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuText: {
    color: '#D4AF37',
    fontSize: 22,
  },

  hero: {
    backgroundColor: '#071A33',
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 42,
  },

  heroSmall: {
    color: '#D4AF37',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 18,
  },

  heroTitle: {
    color: '#FFFFFF',
    fontSize: 42,
    lineHeight: 49,
    fontWeight: '800',
  },

  goldText: {
    color: '#D4AF37',
  },

  heroDescription: {
    color: '#D8DEE7',
    fontSize: 16,
    lineHeight: 25,
    marginTop: 20,
    maxWidth: 620,
  },

  primaryButton: {
    backgroundColor: '#D4AF37',
    paddingVertical: 16,
    paddingHorizontal: 22,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 28,
  },

  primaryButtonText: {
    color: '#071A33',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1,
  },

  section: {
    paddingHorizontal: 20,
    paddingTop: 32,
  },

  sectionTitle: {
    color: '#071A33',
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 18,
  },

  actionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },

  actionCard: {
    backgroundColor: '#FFFFFF',
    width: '48%',
    minHeight: 145,
    borderRadius: 12,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E7E1D2',
    justifyContent: 'center',
  },

  actionIcon: {
    color: '#D4AF37',
    fontSize: 27,
    marginBottom: 10,
  },

  actionTitle: {
    color: '#071A33',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1,
  },

  actionText: {
    color: '#707783',
    fontSize: 13,
    marginTop: 5,
  },

  categoryRow: {
    gap: 12,
    paddingBottom: 5,
  },

  categoryCard: {
    width: 180,
    height: 110,
    backgroundColor: '#071A33',
    borderRadius: 12,
    padding: 18,
    justifyContent: 'flex-end',
  },

  categoryTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },

  categoryCount: {
    color: '#D4AF37',
    fontSize: 12,
    marginTop: 5,
  },

  trustCard: {
    marginHorizontal: 20,
    marginTop: 34,
    padding: 25,
    borderRadius: 14,
    backgroundColor: '#EFE8D6',
    borderWidth: 1,
    borderColor: '#D4AF37',
  },

  trustLabel: {
    color: '#8C6F18',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 2,
  },

  trustTitle: {
    color: '#071A33',
    fontSize: 23,
    fontWeight: '800',
    marginTop: 10,
  },

  trustText: {
    color: '#505762',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 10,
  },

  footer: {
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  footerBrand: {
    color: '#071A33',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 1.5,
  },

  footerTagline: {
    color: '#8C6F18',
    fontSize: 13,
    marginTop: 6,
  },

  footerLocation: {
    color: '#858B94',
    fontSize: 12,
    marginTop: 8,
  },
});