import React, {useMemo} from 'react';
import {Icon, View, Text} from '@components';
import {colors} from '@constants';
import styles from './styles';

const Rating: React.FC<TProps> = ({rating}) => {
  const percentWidth = useMemo(() => rating * 10, [rating]);

  return (
    <View style={styles.ratingView}>
      <Text style={styles.ratingNumber}>{rating}</Text>
      <View>
        <Icon name={'stars'} size={12} color={colors.gray_888888} />
        <View style={[styles.halfStarView, {width: `${percentWidth}%`}]}>
          <Icon name={'stars'} size={12} color={'tomato'} />
        </View>
      </View>
    </View>
  );
};

export default Rating;

type TProps = {
  rating: number;
};
