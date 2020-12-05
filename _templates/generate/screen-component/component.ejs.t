---
to: src/screens/<%=folder%>/components/<%=h.changeCase.pascal(name)%>/<%=h.changeCase.pascal(name)%>.tsx
---
import React from 'react';
import {useCallback, useMemo} from '@hooks';
import {View} from '@components';
import styles from './styles';

const <%=h.changeCase.pascal(name)%>: React.FC<TProps> = ({}) => {
	return <View>{/* content */}</View>;
	};

	export default <%=h.changeCase.pascal(name)%>;

	type TProps = {};