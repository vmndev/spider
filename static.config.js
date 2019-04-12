import React from 'react'
import path from 'path'
import axios from 'axios'

export default {
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Heebo:400,500|Quicksand:400,500" rel="stylesheet" />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  getSiteData: async (props) => {
    console.log(props)
    return({
      title: 'My Awesome Website',
      lastBuilt: Date.now(),
    })
  },
  getRoutes: async () => {
    // const { data: posts } = await axios.get(
    //   'https://jsonplaceholder.typicode.com/posts'
    // )

    const languages = ['en', 'he']
    const pages = [
      'about',
      'web_content',
      'scanning',
    ]

    let routes = [{
      path: `/`,
      template: 'src/pages/index',
      getData: () => ({ language: 'en', page: 'index' })
    }]

    languages.forEach( language => {
      routes.push({
        path: `${language}/`,
        template: 'src/pages/index',
        getData: () => ({ language, page: 'index' })
      })
      pages.forEach( page => {
        routes.push({
          path: `${language}/${page}`,
          template: `src/pages/${page}`,
          getData: () => ({ language, page })
        })
      })
    })
    return routes
  },

  //   return [
  //     {
  //       path: 'he/blog',
  //       template: 'src/containers/zzz',
  //       getData: () => ({
  //         huj: 'da',
  //       }),
  //     },
  //     {
  //       path: '/blog',
  //       getData: () => ({
  //         posts,
  //       }),
  //       children: posts.map(post => ({
  //         path: `/post/${post.id}`,
  //         template: 'src/containers/Post',
  //         getData: () => ({
  //           post,
  //         }),
  //       })),
  //     },
  //   ]
  // },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
    require.resolve('react-static-plugin-sass'),
  ],
}
