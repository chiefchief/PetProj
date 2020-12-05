---
to: src/components/<%= folder %>/<%= h.changeCase.pascal(name) %>/index.tsx
---
import React from 'react'
import { useCallback, useMemo } from '@hooks'
import { View } from '@components'
import styles from './styles'

const <%= h.changeCase.pascal(name) %>: React.FC<TProps> = ({}) => {
  return (
  <View>
    {/* content */}
  </View>
  )
  }

  export default <%= h.changeCase.pascal(name) %>;

  type TProps = {

  }