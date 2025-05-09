import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from 'react-native';
import {styles} from '../Style/Productstyles';
type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
};

const categories = ['Electronics', 'Clothing', 'Books', 'Shoes', 'Groceries'];

const products: Product[] = [
  {id: '1', name: 'Smartphone', category: 'Electronics', price: '$699'},
  {id: '2', name: 'T-Shirt', category: 'Clothing', price: '$29'},
  {id: '3', name: 'Novel', category: 'Books', price: '$15'},
  {id: '4', name: 'Sneakers', category: 'Shoes', price: '$89'},
  {id: '5', name: 'Rice Bag', category: 'Groceries', price: '$10'},
];

export default function ProductShowcaseApp() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleProductPress = (product: Product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };

  const renderProduct = ({item}: {item: Product}) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => handleProductPress(item)}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productCategory}>{item.category}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>🛍️ Coreflex Product Hub</Text>

      <Text style={styles.subHeader}>Browse by Category</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryScroll}>
        {categories.map(category => (
          <View key={category} style={styles.categoryItem}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.subHeader}>Available Products</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={renderProduct}
        style={styles.listContainer}
      />

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedProduct?.name}</Text>
            <Text style={styles.modalText}>
              📦 Category: {selectedProduct?.category}
            </Text>
            <Text style={styles.modalText}>
              💵 Price: {selectedProduct?.price}
            </Text>

            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
