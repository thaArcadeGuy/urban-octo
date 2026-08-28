export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  if (!body.name || !body.email || !body.message) {
    return {
      success: false,
      message: 'Please fill in all required fields'
    }
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    return {
      success: false,
      message: 'Please provide a valid email address'
    }
  }
  
  try {
    console.log('Contact form submission:', body)

    return {
      success: true,
      message: 'Message sent successfully'
    }
  } catch (error) {
    console.error('Error sending message:', error)
    return {
      success: false,
      message: 'Failed to send message. Please try again.'
    }
  }
})
