import type { ComponentProps } from 'react'
import OriginalLayout from '@theme-original/DocItem/Layout'
import OpenWithLlm from '../../../components/OpenWithLlm'
import styles from './styles.module.css'

export default function DocItemLayout(props: ComponentProps<typeof OriginalLayout>) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.toolbar}>
        <OpenWithLlm />
      </div>
      <OriginalLayout {...props} />
    </div>
  )
}
