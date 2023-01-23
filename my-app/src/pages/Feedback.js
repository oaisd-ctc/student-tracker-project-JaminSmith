import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../../src/feedback.css';
function ContactForm() {
  const [state, handleSubmit] = useForm("xjvdkdrd");
  if (state.succeeded) {
      return <p>Thanks for the feedback!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name">
        <h2>First Name:</h2>
      </label>
      <input
        id="First-Name"
        name="First-Name"
      />
      <ValidationError 
        prefix="First-Name" 
        field="First-Name"
        errors={state.errors}
      />
      <label htmlFor="LastName">
        <h2>Last Name:</h2>
      </label>
      <input
        id="Last-Name"
        name="Last-Name"
      />
      <ValidationError 
        prefix="Last-Name" 
        field="Last-Name"
        errors={state.errors}
      />
      <label htmlFor="email">
        <h2>Email Address:</h2>
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="Feedback">
        <h2>What can we help you with?</h2>
      </label>
      <input
        id="Feedback"
        type="Feedback" 
        name="Feedback"
      />
      <ValidationError 
        prefix="Feedback" 
        field="Feedback"
        errors={state.errors}
      />
      <label htmlFor="Notes">
        <h2>Anything else?</h2>
      </label>
      <input
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;
