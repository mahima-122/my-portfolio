import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Mail, Github, Linkedin, ArrowUpRight, Send } from 'lucide-react'

const contacts = [
  {
    label: 'Email',
    value: 'mahimabastola4@gmail.com',
    href: 'mailto:mahimabastola4@gmail.com',
    icon: Mail,
  },
  {
    label: 'GitHub',
    value: 'github.com/mahima-122',
    href: 'https://github.com/mahima-122',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/mahimabastola',
    href: 'https://linkedin.com',
    icon: Linkedin,
  },
]

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false) // Added to show loading state

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          // Replace this with your actual Web3Forms Access Key
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY, 
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 4000)
        setForm({ name: '', email: '', message: '' }) // Clear form
      } else {
        console.error('Error:', result)
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Network error. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-8 md:py-12 bg-bg-secondary">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="section-label">Contact</p>
          <h2 className="section-title">
            Let's work<br />
            <span className="text-text-secondary">together</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Links + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-text-secondary leading-relaxed mb-10" style={{ fontWeight: 300 }}>
              Available for freelance projects, full-time roles, and creative collaborations. 
              Whether you have a project in mind or just want to say hello — reach out.
            </p>

            <div className="space-y-4">
              {contacts.map((c, i) => {
                const Icon = c.icon
                return (
                  <motion.a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center justify-between p-5 card-base group hover:border-border-hover"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-bg-tertiary flex items-center justify-center text-text-secondary group-hover:text-accent transition-colors">
                        <Icon size={16} />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] text-text-muted tracking-widest uppercase mb-0.5">
                          {c.label}
                        </p>
                        <p className="text-sm text-text-primary">{c.value}</p>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-text-muted group-hover:text-accent transition-colors"
                    />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="card-base p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mb-4">
                    <Send size={20} className="text-accent" />
                  </div>
                  <h3 className="font-display font-700 text-xl text-text-primary mb-2">Message sent!</h3>
                  <p className="text-text-secondary text-sm">I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="font-mono text-[10px] text-text-muted tracking-widest uppercase block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-bg-tertiary border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-border-hover transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] text-text-muted tracking-widest uppercase block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full bg-bg-tertiary border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-border-hover transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] text-text-muted tracking-widest uppercase block mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="w-full bg-bg-tertiary border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-border-hover transition-colors resize-none"
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`btn-primary w-full justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <Send size={14} />}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}