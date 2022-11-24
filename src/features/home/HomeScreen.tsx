import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';

import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, Divider, Text} from 'react-native-paper';
import {NetWorkAction} from '../../api/NetWorkReducer';
import {DialogMessage} from '../../components/DialogMessage';
import {Loading} from '../../components/Loading';
import {Country} from '../../domain/model/CountryDto';
import {baseStylesText} from '../../styles/baseStyles';
import {colors} from '../../styles/colors';
import {dimensions} from '../../styles/dimensions';
import useViewModel from './HomeViewmodel';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: dimensions.paddingLarge,
    paddingTop: 50,
    height: '100%',
    color: '#000000',
  },
  selectCountry: {
    width: '30%',
    backgroundColor: colors.colorPrimary,
    justifyContent: 'flex-start',
  },
  itemContainer: {
    ...baseStylesText.textParagraphMedium,
    padding: dimensions.paddingLarge,
  },
});

export const HomeScreen = () => {
  const {listCountryState, getListCountry, dispatch} = useViewModel();
  const [isInitialRender, setIsInitialRender] = useState(true);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['2%', '50%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    if (index === 0) {
      bottomSheetRef.current?.close();
    }
  }, []);

  useEffect(() => {
    if (isInitialRender) {
      bottomSheetRef.current?.close();
      getListCountry();
      setIsInitialRender(false);
    }
  }, [getListCountry, isInitialRender]);
  const renderItem = useCallback(
    ({item}) => (
      <View>
        <Text
          style={styles.itemContainer}>{`${item.flag}   ${item.name}`}</Text>
        <Divider />
      </View>
    ),
    [],
  );
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <DialogMessage
          message={listCountryState.error?.message}
          visible={!!listCountryState.error}
          onPressOk={() => {
            dispatch({type: NetWorkAction.IDLE});
          }}
        />
        <Loading visible={listCountryState.loading} />
        <Button
          mode="contained"
          style={styles.selectCountry}
          labelStyle={{color: '#000000'}}
          onPress={() => {
            bottomSheetRef.current?.expand();
          }}>
          🇯🇵 Japan
        </Button>
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <BottomSheetFlatList
            data={listCountryState.data as Country[]}
            keyExtractor={i => i.uuid}
            renderItem={renderItem}
          />
        </BottomSheet>
      </View>
    </SafeAreaView>
  );
};
