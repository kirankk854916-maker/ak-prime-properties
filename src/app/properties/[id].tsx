import { router, useLocalSearchParams } from 'expo-router';
import {
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const properties = [
  {
    id: 1,
    title: 'Premium Residential Site',
    location: 'Sarjapur, Bangalore',
    type: 'Sites',
    area: '1,200 Sq. Ft.',
    price: '₹ 75 Lakhs',
    description:
      'Premium residential site in a developing location with good connectivity and future growth potential.',
  },
  {
    id: 2,
    title: 'Residential Villa',
    location: 'Attibele, Bangalore',
    type: 'Villas',
    area: '2,400 Sq. Ft.',
    price: '₹ 1.35 Crore',
    description:
      'Spacious residential villa located in a well-connected area suitable for family living.',
  },
  {
    id: 3,
    title: 'Agricultural Land',
    location: 'Anekal, Bangalore',
    type: 'Lands',
    area: '2 Acres',
    price: '₹ 2.20 Crore',
    description:
      'Agricultural land in Anekal with good road connectivity and surrounding development.',
  },
];

export default function PropertyDetailsScreen() {
  const { id } = useLocalSearchParams();

  const property = properties.find(
    (item) => item.id.toString() === id
  );

  if (!property) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.center}>
          <Text style={styles.notFound}>Property not found</Text>

          <Pressable
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backButtonText}>GO BACK</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Pressable
            style={styles.backCircle}
            onPress={() => router.back()}
          >
            <Text style={styles.backArrow}>‹</Text>
          </Pressable>

          <Text style={styles.headerTitle}>PROPERTY DETAILS</Text>

          <View style={styles.headerSpace} />
        </View>

        <View style={styles.imagePlaceholder}>
          <Text style={styles.imageIcon}>⌂</Text>
          <Text style={styles.imageText}>PROPERTY PHOTO</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.availableBadge}>
            <Text style={styles.availableText}>AVAILABLE</Text>
          </View>

          <Text style={styles.title}>{property.title}</Text>

          <Text style={styles.location}>
            📍 {property.location}
          </Text>

          <Text style={styles.price}>{property.price}</Text>

          <View style={styles.divider} />

          <Text style={styles.sectionTitle}>PROPERTY INFORMATION</Text>

          <View style={styles.infoCard}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Property Type</Text>
              <Text style={styles.infoValue}>{property.type}</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Area</Text>
              <Text style={styles.infoValue}>{property.area}</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Location</Text>
              <Text style={styles.infoValue}>{property.location}</Text>
            </View>

            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Status</Text>
              <Text style={styles.availableValue}>Available</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>DESCRIPTION</Text>

          <Text style={styles.description}>
            {property.description}
          </Text>

          <Text style={styles.sectionTitle}>INTERESTED IN THIS PROPERTY?</Text>

          <Pressable style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>
              SEND ENQUIRY
            </Text>
          </Pressable>

          <Pressable style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>
              CONTACT AK PRIME PROPERTIES
            </Text>
          </Pressable>

          <Text style={styles.footerBrand}>
            AK PRIME PROPERTIES
          </Text>

          <Text style={styles.footerTagline}>
            Where Property Meets Trust.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F6F0',
  },

  header: {
    height: 72,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#061A33',
  },

  backCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: '#D4AF37',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backArrow: {
    color: '#FFFFFF',
    fontSize: 32,
    lineHeight: 34,
    marginTop: -3,
  },

  headerTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 1.5,
  },

  headerSpace: {
    width: 42,
  },

  imagePlaceholder: {
    height: 260,
    backgroundColor: '#DDE1E6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageIcon: {
    fontSize: 42,
    color: '#061A33',
    marginBottom: 8,
  },

  imageText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#526276',
    letterSpacing: 1.5,
  },

  content: {
    padding: 20,
  },

  availableBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#F1E8CF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
    marginBottom: 12,
  },

  availableText: {
    color: '#9A7612',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
  },

  title: {
    color: '#061A33',
    fontSize: 28,
    fontWeight: '800',
    lineHeight: 34,
    marginBottom: 8,
  },

  location: {
    color: '#657286',
    fontSize: 15,
    marginBottom: 18,
  },

  price: {
    color: '#061A33',
    fontSize: 25,
    fontWeight: '800',
    marginBottom: 20,
  },

  divider: {
    height: 1,
    backgroundColor: '#DDD6C8',
    marginBottom: 24,
  },

  sectionTitle: {
    color: '#061A33',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.5,
    marginBottom: 12,
    marginTop: 8,
  },

  infoCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0D8C8',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEAE2',
  },

  infoLabel: {
    color: '#697487',
    fontSize: 14,
  },

  infoValue: {
    color: '#061A33',
    fontSize: 14,
    fontWeight: '700',
    maxWidth: '55%',
    textAlign: 'right',
  },

  availableValue: {
    color: '#9A7612',
    fontSize: 14,
    fontWeight: '800',
  },

  description: {
    color: '#596579',
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 24,
  },

  primaryButton: {
    backgroundColor: '#061A33',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 12,
  },

  primaryButtonText: {
    color: '#D4AF37',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0.8,
  },

  secondaryButton: {
    borderWidth: 1,
    borderColor: '#D4AF37',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
  },

  secondaryButtonText: {
    color: '#061A33',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0.5,
  },

  footerBrand: {
    textAlign: 'center',
    color: '#061A33',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 2,
    marginTop: 42,
  },

  footerTagline: {
    textAlign: 'center',
    color: '#9A7612',
    fontSize: 12,
    marginTop: 8,
    marginBottom: 20,
  },

  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  notFound: {
    color: '#061A33',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
  },

  backButton: {
    backgroundColor: '#061A33',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 8,
  },

  backButtonText: {
    color: '#D4AF37',
    fontWeight: '800',
  },
});