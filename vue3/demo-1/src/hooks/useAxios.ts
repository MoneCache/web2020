import { ref } from 'vue'
import axios from "axios"


function fetch (url: string) {
  const result = ref(null)
  const loading = ref(true)
  const loaded = ref(false)
  const error = ref(null)

  axios.get(url).then((res) => {
    loading.value = false
    loaded.value = true
    result.value = res.data
  }).catch((e) => {
    loading.value = false
    loaded.value = true
    error.value = e
  })

  return {
    result,
    loading,
    loaded,
    error
  }
}

export default fetch