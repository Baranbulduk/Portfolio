// create a form component

import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'

// create a form component with a name, email, message, and submit button

const SERVICE_ID = 'service_wh3f17e'
const TEMPLATE_ID = 'template_hkrh01k'
const PUBLIC_KEY = 'LC_wdOGH4927VAB4C'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    let timer: number
    if (submitted) {
      setShowModal(true)
      timer = window.setTimeout(() => {
        setShowModal(false)
      }, 5000)
    }
    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [submitted])

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
    <div className="section contact">
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
        {error && <div className="contact-error">{error}</div>}
      </form>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="contact-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="contact-modal-content"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaCheckCircle className="contact-modal-icon" />
              <p className="contact-modal-text">Thank you for your message!</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Contact
