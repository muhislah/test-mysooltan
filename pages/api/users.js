async function handler (req, res) {
  try {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const result = await data.json()
    res.json(result)
  } catch (error) {
    console.log(error)   
  }
}

export default handler