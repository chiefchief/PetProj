---
to: src/screens/<%=h.changeCase.pascal(name)%>/<%=h.changeCase.pascal(name)%>.tsx
---
import React from 'react';
import {useState, useEffect, useCallback, useMemo, useTranslation} from '@hooks';
import {View, Text} from '@components';
import styles from './styles';

const <%= h.changeCase.pascal(name) %>: React.FC<TProps> = () => {
  // <%= h.changeCase.pascal(name) %> screen data.
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Text><%= h.changeCase.pascal(name) %>Screen</Text>
    </View>
  );
};

export default <%= h.changeCase.pascal(name) %>;

type TProps = {};
