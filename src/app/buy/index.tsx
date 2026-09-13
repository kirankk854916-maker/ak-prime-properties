import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
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
  },
  {
    id: 2,
    title: 'Residential Villa',
    location: 'Attibele, Bangalore',
    type: 'Villas',
    area: '2,400 Sq. Ft.',
    price: '₹ 1.35 Crore',
  },
  {
    id: 3,
    title: 'Agricultural Land',
    location: 'Anekal, Bangalore',
    type: 'Lands',
    area: '2 Acres',
    price: '₹ 2.20 Crore',
  },
];

export default function BuyPropertiesScreen() {
  const [searchText, setSearchText] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

const filteredProperties = properties.filter((property) => {
  const matchesSearch =
    property.title.toLowerCase().includes(searchText.toLowerCase()) ||
    property.location.toLowerCase().includes(searchText.toLowerCase());

  const matchesFilter =
    selectedFilter === 'All' || property.type === selectedFilter;

  return matchesSearch && matchesFilter;
});

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
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Text style={styles.backText}>‹</Text>
          </Pressable>

          <View style={styles.headerBrand}>
            <Text style={styles.brand}>AK PRIME</Text>
            <Text style={styles.brandSub}>PROPERTIES</Text>
          </View>

          <View style={styles.headerSpace} />
        </View>

        {/* Page title */}
        <View style={styles.titleSection}>
          <Text style={styles.eyebrow}>AK PRIME PROPERTIES</Text>
          <Text style={styles.title}>Find Your Property</Text>
          <Text style={styles.subtitle}>
            Explore trusted properties in Bangalore and surrounding areas.
          </Text>
        </View>

        {/* Search */}
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>⌕</Text>

          <TextInput
            placeholder="Search by location or property"
            placeholderTextColor="#8A8F98"
            value={searchText}
onChangeText={setSearchText}
            style={styles.searchInput}
          />
        </View>

        {/* Filters */}
        <View style={styles.filterSection}>
          <Text style={styles.filterHeading}>Quick Filters</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterRow}
          >
            <Pressable
  style={styles.filterActive}
  onPress={() => setSelectedFilter('All')}
>
  <Text style={styles.filterActiveText}>All</Text>
</Pressable>

            <Pressable
  style={[
    styles.filterButton,
    selectedFilter === 'Sites' && styles.filterActive,
  ]}
  onPress={() => setSelectedFilter('Sites')}
>
  <Text
    style={[
      styles.filterText,
      selectedFilter === 'Sites' && styles.filterTextActive,
    ]}
  >
    Sites
  </Text>
</Pressable>
            <Pressable
  style={[
  styles.filterButton,
  selectedFilter === 'Lands' && styles.filterActive,
]}
  onPress={() => setSelectedFilter('Lands')}
>
  <Text
  style={[
    styles.filterText,
    selectedFilter === 'Lands' && styles.filterTextActive,
  ]}
>
  Lands
</Text>
</Pressable>

            <Pressable
  style={[
  styles.filterButton,
  selectedFilter === 'Apartments' && styles.filterActive,
]}
  onPress={() => setSelectedFilter('Apartments')}
>
  <Text
  style={[
    styles.filterText,
    selectedFilter === 'Apartments' && styles.filterActiveText,
  ]}
>
  Apartments
</Text>
</Pressable>

            <Pressable
  style={[
  styles.filterButton,
  selectedFilter === 'Villas' && styles.filterActive,
]}
  onPress={() => setSelectedFilter('Villas')}
>
  <Text
  style={[
    styles.filterText,
    selectedFilter === 'Villas' && styles.filterActiveText,
  ]}
>
  Villas
</Text>
</Pressable>

            <Pressable
  style={[
    styles.filterButton,
    selectedFilter === 'Commercial' && styles.filterActive,
  ]}
  onPress={() => setSelectedFilter('Commercial')}
>
  <Text
  style={[
    styles.filterText,
    selectedFilter === 'Commercial' && styles.filterActiveText,
  ]}
>
  Commercial
</Text>
</Pressable>
          </ScrollView>
        </View>

        {/* Sort */}
        <View style={styles.resultsHeader}>
          <View>
            <Text style={styles.resultsTitle}>Featured Properties</Text>
            <Text style={styles.resultsSubtitle}>
              Properties available for enquiry
            </Text>
          </View>

          <Pressable style={styles.sortButton}>
            <Text style={styles.sortText}>Sort</Text>
          </Pressable>
        </View>

{filteredProperties.map((property) => (
  <Pressable
  key={property.id}
  style={styles.propertyCard}
  onPress={() =>
    router.push({
      pathname: '/properties/[id]',
      params: { id: String(property.id) },
    })
  }
>
    <View style={styles.imagePlaceholder}>
      <Text style={styles.imageIcon}>⌂</Text>
      <Text style={styles.imageText}>PROPERTY PHOTO</Text>
    </View>

    <View style={styles.propertyInfo}>
      <View style={styles.availableBadge}>
        <Text style={styles.availableText}>AVAILABLE</Text>
      </View>

      <Text style={styles.propertyTitle}>
        {property.title}
      </Text>

      <Text style={styles.location}>
        📍 {property.location}
      </Text>

      <View style={styles.detailsRow}>
        <View>
          <Text style={styles.detailLabel}>TYPE</Text>
          <Text style={styles.detailValue}>{property.type}</Text>
        </View>

        <View>
          <Text style={styles.detailLabel}>AREA</Text>
          <Text style={styles.detailValue}>{property.area}</Text>
        </View>
      </View>

      <View style={styles.priceRow}>
        <View>
          <Text style={styles.priceLabel}>PRICE</Text>
          <Text style={styles.price}>{property.price}</Text>
        </View>

        <View style={styles.viewButton}>
          <Text style={styles.viewButtonText}>VIEW DETAILS</Text>
        </View>
      </View>
    </View>
  </Pressable>
))}
               {/* Note */}
        <View style={styles.noteCard}>
          <Text style={styles.noteTitle}>Looking for something specific?</Text>
          <Text style={styles.noteText}>
            Tell AK PRIME PROPERTIES your preferred location, budget and
            property requirements. Our team can assist you.
          </Text>

          <Pressable style={styles.enquiryButton}>
            <Text style={styles.enquiryText}>SEND PROPERTY REQUIREMENT</Text>
          </Pressable>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerBrand}>AK PRIME PROPERTIES</Text>
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
    backgroundColor: '#071A33',
  },

  container: {
    flex: 1,
    backgroundColor: '#F8F6F0',
  },

  content: {
    paddingBottom: 50,
  },

  header: {
    backgroundColor: '#071A33',
    paddingHorizontal: 22,
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#D4AF37',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backText: {
    color: '#D4AF37',
    fontSize: 32,
    lineHeight: 34,
  },

  headerBrand: {
    alignItems: 'center',
  },

  brand: {
    color: '#D4AF37',
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 2,
  },

  brandSub: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 3,
    marginTop: 2,
  },

  headerSpace: {
    width: 44,
  },

  titleSection: {
    backgroundColor: '#071A33',
    paddingHorizontal: 22,
    paddingBottom: 30,
  },

  eyebrow: {
    color: '#D4AF37',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 2,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '800',
    marginTop: 10,
  },

  subtitle: {
    color: '#D7DDE6',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 10,
  },

  searchBox: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E1DACB',
    minHeight: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },

  searchIcon: {
    color: '#8C6F18',
    fontSize: 27,
    marginRight: 10,
  },

  searchInput: {
    flex: 1,
    color: '#071A33',
    fontSize: 15,
  },

  filterSection: {
    paddingTop: 25,
    paddingHorizontal: 20,
  },

  filterHeading: {
    color: '#071A33',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 13,
  },

  filterRow: {
    gap: 9,
    paddingBottom: 5,
  },

  filterActive: {
    backgroundColor: '#071A33',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 22,
  },

filterTextActive: {
  color: '#FFFFFF',
},

  filterActiveText: {
    color: '#D4AF37',
    fontWeight: '800',
    fontSize: 13,
  },

  filterButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDD5C4',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 22,
  },

  filterText: {
    color: '#071A33',
    fontWeight: '700',
    fontSize: 13,
  },

  resultsHeader: {
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  resultsTitle: {
    color: '#071A33',
    fontSize: 21,
    fontWeight: '800',
  },

  resultsSubtitle: {
    color: '#777D86',
    fontSize: 12,
    marginTop: 4,
  },

  sortButton: {
    borderWidth: 1,
    borderColor: '#D4AF37',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 9,
  },

  sortText: {
    color: '#8C6F18',
    fontSize: 12,
    fontWeight: '800',
  },

  propertyCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 18,
    borderRadius: 14,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E2DCCF',
  },

  imagePlaceholder: {
    height: 190,
    backgroundColor: '#DDE1E5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageIcon: {
    color: '#071A33',
    fontSize: 40,
  },

  imageText: {
    color: '#5F6670',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    marginTop: 5,
  },

  propertyInfo: {
    padding: 18,
  },

  availableBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#EFE8D6',
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 5,
  },

  availableText: {
    color: '#8C6F18',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },

  propertyTitle: {
    color: '#071A33',
    fontSize: 19,
    fontWeight: '800',
    marginTop: 11,
  },

  location: {
    color: '#686F79',
    fontSize: 13,
    marginTop: 7,
  },

  detailsRow: {
    flexDirection: 'row',
    gap: 45,
    marginTop: 18,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#EEEAE1',
  },

  detailLabel: {
    color: '#969BA3',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1,
  },

  detailValue: {
    color: '#071A33',
    fontSize: 13,
    fontWeight: '700',
    marginTop: 4,
  },

  priceRow: {
    marginTop: 18,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#EEEAE1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  priceLabel: {
    color: '#969BA3',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1,
  },

  price: {
    color: '#071A33',
    fontSize: 19,
    fontWeight: '800',
    marginTop: 3,
  },

  viewButton: {
    backgroundColor: '#D4AF37',
    paddingHorizontal: 13,
    paddingVertical: 11,
    borderRadius: 7,
  },

  viewButtonText: {
    color: '#071A33',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.5,
  },

  noteCard: {
    marginHorizontal: 20,
    marginTop: 10,
    padding: 22,
    backgroundColor: '#EFE8D6',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#D4AF37',
  },

  noteTitle: {
    color: '#071A33',
    fontSize: 19,
    fontWeight: '800',
  },

  noteText: {
    color: '#5E6570',
    fontSize: 13,
    lineHeight: 21,
    marginTop: 8,
  },

  enquiryButton: {
    backgroundColor: '#071A33',
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 7,
    marginTop: 16,
  },

  enquiryText: {
    color: '#D4AF37',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.5,
  },

  footer: {
    alignItems: 'center',
    paddingTop: 35,
  },

  footerBrand: {
    color: '#071A33',
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 1.5,
  },

  footerTagline: {
    color: '#8C6F18',
    fontSize: 12,
    marginTop: 6,
  },
});