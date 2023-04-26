import { Helmet } from 'react-helmet-async'
import { useContext } from 'react'
import ogImage from 'assets/images/ic_ball.png'

import { AppInfo } from 'contexts/AppInfo'
export default function HelmetComponents(props: { title: string }) {
  const { appName } = useContext(AppInfo)

  return (
    <Helmet>
      <title>
        {appName}
        {props.title}
      </title>
      <meta property="og:title" content={appName + props.title} />
      <meta property="og:image" content={ogImage} />
    </Helmet>
  )
}
