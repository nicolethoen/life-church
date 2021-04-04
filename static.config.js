import axios from 'axios'
import path from 'path'
import * as React from 'react';
// import { Post } from './types'

// Typescript support in static.config.js is not yet supported, but is coming in a future update!

export default {
  Document: ({
    Html,
    Head,
    Body,
    children,
    state: { siteData, renderMeta },
  }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Life Church exists in Ayer to be a transformed people, loving God, and loving others, sharing life in and through community. Affiliated with the Evangelical Free Church of America." />
        <link rel="canonical" href="http://www.lifechurchayer.com/" />
        <meta name="robots" content="index, follow" />
        <title>Life Church</title>
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="icon" href="favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"/>
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getRoutes: async () => {
    const { data: posts } /* :{ data: Post[] } */ = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    return [
      {
        path: '/blog',
        getData: () => ({
          posts,
        }),
        children: posts.map((post /* : Post */) => ({
          path: `/post/${post.id}`,
          template: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
    ]
  },
  plugins: [
    'react-static-plugin-typescript',
    'react-static-plugin-svg',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
    [
      'react-static-plugin-favicons',
      {
        outputDir: path.join(__dirname, 'dist'),
        inputFile: path.resolve(__dirname, 'favicon.ico')
      }
    ]
  ],
}
