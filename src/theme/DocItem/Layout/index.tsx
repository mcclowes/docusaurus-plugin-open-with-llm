import type { ComponentProps } from 'react'
import InitialLayout from '@theme-init/DocItem/Layout'
import OpenWithLlm from '../../../components/OpenWithLlm'
import styles from './styles.module.css'

export default function DocItemLayout(props: ComponentProps<typeof InitialLayout>) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.toolbar}>
        <OpenWithLlm />
      </div>
      <InitialLayout {...props} />
    </div>
  )
}
