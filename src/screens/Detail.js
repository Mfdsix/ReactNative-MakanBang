import React from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  TouchableHighlight,
  StyleSheet,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {color} from 'react-native-elements/dist/helpers';
import FOODS from '../data/foods';

export default function Detail({navigation}) {
  function goToHome() {
    navigation.navigate('Home');
  }

  const food = FOODS[FOODS.length - 1];
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: food.image,
          }}
        />
        {/* main section */}
        <ScrollView style={styles.scrollView}>
          {/* back button */}
          <View style={backStyles.container}>
            <Icon size={15} color={'#333'} name="angle-left" type="fontisto" />
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={backStyles.title}>
              {food.title}
            </Text>
          </View>
          <View style={detailStyles.container}>
            {/* food detail */}
            <View style={detailStyles.fluid}>
              <Text style={detailStyles.foodTitle}>{food.title}</Text>
              <Text style={detailStyles.foodDetail}>{food.description}</Text>

              {/* price and quantity */}
              <View style={priceStyles.container}>
                <View>
                  <Text style={priceStyles.title}>Price</Text>
                  <Text style={priceStyles.value}>$ {food.price}</Text>
                </View>
                <View>
                  <Text
                    style={[
                      priceStyles.title,
                      {
                        textAlign: 'right',
                      },
                    ]}>
                    Quantity
                  </Text>
                  <View style={priceStyles.quantityContainer}>
                    <View style={priceStyles.quantityChooser}>
                      <Icon
                        name="minus-a"
                        size={15}
                        color={'#fff'}
                        type="fontisto"
                      />
                    </View>
                    <Text style={priceStyles.quantityValue}>3</Text>
                    <View
                      style={[
                        priceStyles.quantityChooser,
                        priceStyles.quantityAccent,
                      ]}>
                      <Icon
                        size={15}
                        color={'#fff'}
                        name="plus-a"
                        type="fontisto"
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            {/* explore more */}
            <View>
              <View style={exploreStyles.headContainer}>
                <Text style={exploreStyles.headText}>Explore More</Text>
                <Text style={exploreStyles.navigationText}>View all</Text>
              </View>
              <FlatList
                data={FOODS}
                renderItem={({item, index}) => (
                  <TouchableHighlight
                    key={index}
                    activeOpacity={0.6}
                    underlayColor="#ddd">
                    <View style={exploreStyles.itemContainer}>
                      <View style={exploreStyles.imageContainer}>
                        <Image
                          style={exploreStyles.itemImage}
                          source={{uri: item.image}}
                        />
                        <Text style={exploreStyles.itemDeliveryTime}>
                          {item.deliveryTime}
                        </Text>
                      </View>
                      <View style={exploreStyles.itemBodyContainer}>
                        <View style={exploreStyles.itemInfoContainer}>
                          <View style={exploreStyles.itemInfoLeft}>
                            <Text style={exploreStyles.itemTitle}>
                              {item.title}
                            </Text>
                            <View style={exploreStyles.itemRatingContainer}>
                              {[1, 2, 3, 4, 5].map(rate => (
                                <Icon
                                  style={exploreStyles.itemStar}
                                  name="star"
                                  type="fontisto"
                                  size={10}
                                  color={
                                    item.rating >= rate ? '#febf01' : '#eee'
                                  }
                                />
                              ))}
                              <Text style={exploreStyles.itemRatingCount}>
                                ({item.ratingCount})
                              </Text>
                            </View>
                          </View>
                          <Text style={exploreStyles.itemPrice}>
                            ${item.price}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableHighlight>
                )}
                keyExtractor={(_, index) => index.toString()}
              />
            </View>
            {/* floating rating and love */}
            <View style={ratingStyles.container}>
              <Text style={ratingStyles.text}>{food.rating}</Text>
              <Icon
                style={ratingStyles.icon}
                color="#febf01"
                name="star"
                type="fontisto"
                size={12}
              />
              <Text style={ratingStyles.text}>({food.ratingCount})</Text>
            </View>
            <View style={favoriteStyles.container}>
              <Icon
                name="heart-alt"
                size={15}
                color={'#febf01'}
                type="fontisto"
              />
            </View>
            {/*  */}
          </View>
        </ScrollView>
      </View>

      {/* floating */}
      <View style={cartStyles.container}>
        <View style={cartStyles.detailContainer}>
          <Text style={cartStyles.detailTitle}>Sub Total</Text>
          <Text style={cartStyles.detailValue}>
            $ {parseInt(food.price) * 3}
          </Text>
        </View>
        <Text style={cartStyles.button}>Add To Cart</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  scrollView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

const backStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    height: 50,
    margin: 10,
    borderRadius: 25,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 10,
  },
  title: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: 17,
    marginStart: 20,
  },
});

const detailStyles = StyleSheet.create({
  fluid: {
    paddingHorizontal: 30,
  },
  container: {
    position: 'relative',
    marginTop: 150,
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 50,
  },
  foodTitle: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 22,
  },
  foodDetail: {
    color: '#aaa',
    marginTop: 10,
  },
});

const ratingStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -10,
    left: 30,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 10,
    padding: 10,
    alignItems: 'center',
  },
  text: {
    color: '#333',
  },
  icon: {
    marginHorizontal: 10,
  },
});

const favoriteStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -10,
    right: 30,
    backgroundColor: '#fff',
    borderRadius: 20,
    width: 40,
    height: 40,
    elevation: 10,
    justifyContent: 'center',
  },
});

const priceStyles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#333',
    fontSize: 16,
    marginBottom: 10,
  },
  value: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    elevation: 10,
    borderRadius: 10,
    padding: 10,
  },
  quantityChooser: {
    width: 30,
    height: 30,
    backgroundColor: '#333',
    borderRadius: 15,
    padding: 3,
    justifyContent: 'center',
  },
  quantityValue: {
    color: '#333',
    marginHorizontal: 10,
  },
  quantityAccent: {
    backgroundColor: '#febf01',
  },
});

const exploreStyles = StyleSheet.create({
  headContainer: {
    marginTop: 10,
    paddingHorizontal: 30,
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
    marginHorizontal: 30,
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

const cartStyles = StyleSheet.create({
  container: {
    display: 'flex',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    elevation: 20,
    padding: 20,
  },
  button: {
    backgroundColor: '#febf01',
    color: '#fff',
    padding: 15,
    borderRadius: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailTitle: {
    color: '#aaa',
  },
  detailValue: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
});
