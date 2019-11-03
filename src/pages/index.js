import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { useStaticQuery, graphql } from 'gatsby'

const IndexPage = () => {
  const queryData = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Home'
      />

      <section className='text-center border border-storyteller p-10'>
        <h1 className='text-2xl font-bold inline-block'>
          {queryData.site.siteMetadata.title}
        </h1>
        <br />
        <h2 className='font-bold inline my-8 p-3'>
          {queryData.site.siteMetadata.description}
        </h2>
        <br />
        <button>get it</button>
      </section>

      <section className='border border-storyteller p-10'>
        <h2>Got Markdown?</h2>
        <h3>Excellent.</h3>
        <p>
          F makes editing Markdown files a <strong>breeze.</strong> More
          importantly, F makes markup <em>easy to understand.</em>
        </p>
      </section>

      <section className='border border-storyteller p-10'>
        <h2>Need structure?</h2>
        <h3>We got you.</h3>
        <p>
          Headings are visually distinct from one another, up to four levels
          deep. You're looking at them now.
        </p>

        <p>Things to do?</p>
        <ul>
          <li>- [x] Eat</li>
          <li>- [x] Sleep</li>
          <li>- [x] Write</li>
          <li>- [ ] Repeat</li>
        </ul>
      </section>

      <section className='border border-storyteller p-10'>
        <h2>Writing more than words?</h2>
        <h3>Awesome.</h3>

        <p>
          It's not just headings and asterisks that get the star treatment here.
        </p>

        <p>
          F makes sure that <span>comments don't get in your way.</span> Sharing
          examples? See <pre>inline code blocks</pre> clearly.
        </p>

        <p>Writing small novels of code? We got you.</p>

        <pre>
          <code>
            {`      
function fTheme(){
  if (youUseF && youWriteCodeBlocks) {
    itsEasyToTellWhatsWhat = true
    visuallyDifferent = true
    awesomePercentage = 100
  }
}
`}
          </code>
        </pre>
      </section>

      <section className='border border-storyteller p-10'>
        <h2>Go on, give it a try!</h2>
        <h3>You might just fall in love.</h3>

        <p>
          Available for the only Electron-based code editor worth downloading,
          Visual Studio Code.
        </p>
        <p>
          <sub>
            You didn't think I was going to say Atom or Brackets, did you?
          </sub>
        </p>

        <button>get it</button>
      </section>

      <section>Woomy</section>
    </Layout>
  )
}

export default IndexPage
