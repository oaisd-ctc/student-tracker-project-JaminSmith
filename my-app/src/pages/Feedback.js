import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../../src/feedback.css';
function ContactForm() {
  const [state, handleSubmit] = useForm("xjvdkdrd");
  if (state.succeeded) {
      return <h1><p>Thanks for the feedback!</p></h1>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Name">
        <h1><u>Have a question or comment?</u></h1>
        <h5><u>Shoot us an email!</u></h5>
      </label>
        <label htmlFor="Name">
        <h5>First Name:</h5>
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
        <h5>Last Name:</h5>
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
        <h5>Email Address:</h5>
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
        <h5>What can we help you with?</h5>
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
        <h5>Anything else?</h5>
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
      
      <button class="button-28" type="submit" disabled={state.submitting}>
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
