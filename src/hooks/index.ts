// https://reactjs.org/docs/hooks-reference.html
export {
  useState,
  useEffect,
  useContext,
  useReducer,
  useCallback,
  useMemo,
  useRef,
  useImperativeHandle,
  useLayoutEffect,
  useDebugValue,
} from 'react';

// https://github.com/react-navigation/react-navigation-hooks#docs
export {
  useNavigation, // const { navigate, push, goBack } = useNavigation();
  useRoute, // const { params } = useRoute();
  useFocusEffect, // useFocusEffect(() => null);
  useIsFocused, // const isFocused = useIsFocused();
} from '@react-navigation/core';

export {
  useScrollToTop, // useScrollToTop(scrollViewRef);
} from '@react-navigation/native';

export {
  useSafeArea, // const { top, right, bottom, left } = useSafeArea()
} from 'react-native-safe-area-context';

export {
  useHeaderHeight, // HeaderHeight
} from '@react-navigation/stack';

// https://react.i18next.com/latest/usetranslation-hook
export {
  useTranslation, // const { t, i18n } = useTranslation();
} from 'react-i18next';
