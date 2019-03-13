<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <button @click="query">Query</button>

    <p>Loading: {{ loading }}</p>

    <pre>{{ allSpeakers }}</pre>
  </div>
</template>

<script>
import gql from "graphql-tag"
import gqlClient from "@/gql"

// GraphQL query
const postsQuery = gql`
  query {
    allSpeakers {
      id
    }
  }
`

export default {
  data: () => ({
    allSpeakers: [],
    loading: null
  }),

  methods: {
    async query() {
      // const observableQuery = gqlClient.watchQuery({ query: postsQuery })
      // console.log(observableQuery.getCurrentResult())
      // observableQuery.result()
      // observableQuery.subscribe(
      //   x => console.log(x),
      //   err => console.log(`Finished with error: ${err}`),
      //   () => console.log("Finished")
      // )
      const { data, loading } = await gqlClient.query({ query: postsQuery })
      this.loading = loading
      this.allSpeakers = data.allSpeakers
    }
  }
}
</script>
