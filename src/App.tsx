import React from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import news_data from './news_data.json';
import NewsCard from './components/NewsCard';
import {StyleSheet} from 'react-native';
import news_banner_data from './news_banner_data.json';
function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>News</Text>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {news_banner_data.map(bannerNews => (
              <Image
                style={styles.banner_image}
                source={{uri: bannerNews.imageUrl}}
              />
            ))}
          </ScrollView>
        )}
        data={news_data}
        renderItem={({item}) => <NewsCard news={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  banner_image: {
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width / 2,
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
  },
});

export default App;
