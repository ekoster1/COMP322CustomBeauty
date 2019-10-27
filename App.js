import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesPage from './components/CategoriesPage';
import HomePage from './components/HomePage';
import FaceShape from './components/categories/FaceShape';
import SkinTone from './components/categories/SkinTone';
import EyeShape from './components/categories/EyeShape';
import SkinType from './components/categories/SkinType';
import HeartFace from './components/faceshape/HeartFace';
import OvalFace from './components/faceshape/OvalFace';
import RoundFace from './components/faceshape/RoundFace';
import MonolidEyes from './components/eyeshape/MonolidEyes';
import HoodedEyes from './components/eyeshape/HoodedEyes';
import AlmondEyes from './components/eyeshape/AlmondEyes';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomePage,
  },
  CategoriesPage: {
    screen: CategoriesPage,
  },
  FaceShape: {
    screen: FaceShape,
  },
  SkinTone: {
    screen: SkinTone,
  },
  EyeShape:{
    screen: EyeShape,
  },
  SkinType: {
    screen: SkinType,
  },
  HeartFace: {
    screen: HeartFace,
  },
  OvalFace: {
    screen: OvalFace,
  },
  RoundFace: {
    screen: RoundFace,
  },
  AlmondEyes:{
    screen: AlmondEyes,
  },
  HoodedEyes: {
    screen: HoodedEyes,
  },
  MonolidEyes: {
    screen: MonolidEyes,
  },
},
{
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle:{
        backgroundColor:'#6666FC',
      },
      headerTintColor: '#CCCCFF',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}