import Layout from '@/components/Layout';
import React from 'react'

const Page = () => {
  return (
    <div>
      Identifier
    </div>
  )
}

Page.getLayout = (page) => (
    <Layout>
      {page}
    </Layout>
  );
  
  export default Page
