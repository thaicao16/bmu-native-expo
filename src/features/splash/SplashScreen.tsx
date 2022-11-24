import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import {CustomSvgIcon, IconName} from '../../components/CustomSvgIcon';
import {Loading} from '../../components/Loading';
import {colors} from '../../styles/colors';
import {dimensions} from '../../styles/dimensions';
import useSplashViewModel from './SplashViewModel';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: colors.colorPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export const SplashScreen = () => {
  const {getUserData, userDataState} = useSplashViewModel();
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    console.log('getUserData');
    getUserData();
  }, [isInitialRender]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* <Loading visible={userDataState.loading} /> */}
        <CustomSvgIcon
          name={IconName.IcLogo}
          style={{margin: dimensions.marginNormal}}
          width={130}
          height={130}
        />
      </View>
    </SafeAreaView>
  );
};
