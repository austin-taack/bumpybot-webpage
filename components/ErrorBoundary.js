/**
 * Handles errors when sending the contact form
 * Adapted from code at https://nextjs.org/docs/advanced-features/error-handling
 */

import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props)
  
      // Define a state variable to track whether is an error or not
      this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI
      return { hasError: true }
    }
    
    render() {
      // Check if the error is thrown
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
          <div>
            <h2>Sorry, there was an error!</h2>
            <p>As an alternative, you can send a message to <a href="mailto:hkujjf@gmail.com">Dr. Jiao at hkujjf@gmail.com</a>.</p>
            <button
              type="button"
              onClick={() => this.setState({ hasError: false })}
            >
              Try again?
            </button>
          </div>
        )
      }
  
      // Return children components in case of no error
  
      return this.props.children
    }
}

export default ErrorBoundary;