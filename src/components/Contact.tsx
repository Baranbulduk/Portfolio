// create a form component

import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

// create a form component with a name, email, message, and submit button

const SERVICE_ID = 'your_service_id'
const TEMPLATE_ID = 'your_template_id'
const PUBLIC_KEY = 'your_public_key'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      )
      setSubmitted(true)
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setError('Something went wrong. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="content-wrapper contact">
      <h2 className="contact-form-title">Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
        <span className="contact-form-subtitle">Get in touch!</span>
        <label htmlFor="name" className="contact-label">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="contact-input"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email" className="contact-label">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="contact-input"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="message" className="contact-label">Message</label>
        <textarea
          id="message"
          name="message"
          className="contact-textarea"
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
        />
        <button type="submit" className="contact-submit" disabled={loading}>{loading ? 'Sending...' : 'Send'}</button>
        {submitted && <div className="contact-success">Thank you for your message!</div>}
        {error && <div className="contact-error">{error}</div>}
      </form>
    </div>
  )
}

export default Contact
