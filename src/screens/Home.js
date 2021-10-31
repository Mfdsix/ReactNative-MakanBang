import React from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  FlatList,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import {Icon} from 'react-native-elements';
import CATEGORIES from '../data/categories';
import FOODS from '../data/foods';

export default function Home({navigation}) {
  function goToDetail() {
    navigation.navigate('Detail');
  }

  return (
    <ScrollView style={styles.container}>
      {/* head */}
      <View style={headStyles.container}>
        <View style={headStyles.userContainer}>
          <View style={headStyles.userIconContainer}>
            <Icon color={'#febf01'} name="person" type="fontisto" />
          </View>
          <View style={headStyles.userInfoContainer}>
            <Text style={headStyles.userName}>Ma Puth</Text>
            <Text style={headStyles.deliveryTo}>Delivery to Office</Text>
          </View>
        </View>
        <View style={headStyles.notificationContainer}>
          <Icon name="bell-alt" type="fontisto" />
          <View style={headStyles.notificationTick} />
        </View>
      </View>
      {/* categories */}
      <ScrollView style={categoriesStyles.container} horizontal={true}>
        {CATEGORIES.map((category, index) => (
          <View key={index} style={categoriesStyles.itemContainer}>
            <Image
              style={categoriesStyles.image}
              source={{uri: category.image}}
            />
            <Text style={categoriesStyles.categoryName}>{category.name}</Text>
          </View>
        ))}
      </ScrollView>
      {/* search */}
      <View style={searchStyles.container}>
        <View style={searchStyles.searchBox}>
          <Icon name="search" type="fontisto" />
          <Text style={searchStyles.searchBoxText}>
            Search your favorite food
          </Text>
        </View>
        <View style={searchStyles.filterContainer}>
          <Icon name="equalizer" type="fontisto" />
        </View>
      </View>
      {/* popular */}
      <View style={popularStyles.container}>
        <View style={popularStyles.headContainer}>
          <Text style={popularStyles.headText}>Nearby Food</Text>
          <Text style={popularStyles.navigationText}>See more</Text>
        </View>
        <FlatList
          data={FOODS}
          renderItem={({item, index}) => (
            <TouchableHighlight
              activeOpacity={0.6}
              underlayColor="#ddd"
              onPress={() => goToDetail()}>
              <View style={popularStyles.itemContainer}>
                <View style={popularStyles.imageContainer}>
                  <Image
                    style={popularStyles.itemImage}
                    source={{uri: item.image}}
                  />
                  <Text style={popularStyles.itemDeliveryTime}>
                    {item.deliveryTime}
                  </Text>
                </View>
                <View style={popularStyles.itemBodyContainer}>
                  <View style={popularStyles.itemInfoContainer}>
                    <View style={popularStyles.itemInfoLeft}>
                      <Text style={popularStyles.itemTitle}>{item.title}</Text>
                      <View style={popularStyles.itemRatingContainer}>
                        {[1, 2, 3, 4, 5].map(rate => (
                          <Icon
                            style={popularStyles.itemStar}
                            name="star"
                            type="fontisto"
                            size={10}
                            color={item.rating >= rate ? '#febf01' : '#eee'}
                          />
                        ))}
                        <Text style={popularStyles.itemRatingCount}>
                          ({item.ratingCount})
                        </Text>
                      </View>
                    </View>
                    <Text style={popularStyles.itemPrice}>${item.price}</Text>
                  </View>
                </View>
              </View>
            </TouchableHighlight>
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
      {/*  */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const headStyles = StyleSheet.create({
  container: {
    backgroundColor: '#febf01',
    marginBottom: 10,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIconContainer: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  userInfoContainer: {
    marginStart: 10,
  },
  userName: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: 14,
  },
  deliveryTo: {
    color: '#fff',
    fontSize: 12,
    fontStyle: 'italic',
  },
  notificationContainer: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 10,
    position: 'relative',
    elevation: 10,
  },
  notificationTick: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#febf01',
  },
});

const categoriesStyles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingLeft: 20,
    marginEnd: 20,
  },
  itemContainer: {
    width: 100,
    backgroundColor: '#fff',
    marginEnd: 15,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    borderColor: '#eee',
    borderWidth: 1,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginBottom: 8,
  },
  categoryName: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: 12,
    textAlign: 'center',
  },
});

const searchStyles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchBox: {
    flex: 1,
    marginEnd: 15,
    backgroundColor: '#eee',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  searchBoxText: {
    marginStart: 10,
    color: '#333',
    fontSize: 14,
  },
  filterContainer: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 10,
  },
});

const popularStyles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  headContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  headText: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: 14,
  },
  navigationText: {
    color: '#febf01',
  },
  itemContainer: {
    elevation: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#eee',
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  imageContainer: {
    position: 'relative',
  },
  itemImage: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  itemDeliveryTime: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#febf01',
    borderRadius: 3,
    padding: 5,
    color: '#fff',
  },
  itemBodyContainer: {
    padding: 15,
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
  },
  itemInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemInfoLeft: {
    flex: 8,
  },
  itemRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemStar: {
    marginEnd: 2,
  },
  itemRatingCount: {
    color: '#aaa',
    fontSize: 12,
    fontStyle: 'italic',
    marginStart: 10,
  },
  itemPrice: {
    fontWeight: 'bold',
    color: '#febf01',
    fontSize: 25,
  },
});
