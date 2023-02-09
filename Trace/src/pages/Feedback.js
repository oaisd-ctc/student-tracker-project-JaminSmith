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
        <h5><u>First Name:</u></h5>
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
        <h5><u>Last Name:</u></h5>
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
        <h5><u>Email Address:</u></h5>
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
      <h5><u>What can we help you with?</u></h5>
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
        <h5><u>Anything else?</u></h5>
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
