import https from '../config/request'

const BookMyDealApi = {
  create: async (url,body) => https.post(url,body),

  fetch: async (url) => https.get(url),

  modify: async (url,body) => https.put(url,body),
  
  remove: async (url,body) => https.delete(url,body)
}

export default BookMyDealApi