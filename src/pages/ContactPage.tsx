import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import PageHero from "@/components/PageHero";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", volume: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      setSubmitted(true);
    } catch (error: any) {
      console.error("Error sending form:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly by phone.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        badge="Contact Us"
        title="Let's Talk About Your"
        highlight="Revenue"
        description="Ready to accelerate your revenue cycle? Fill out the form below or reach out directly. Our team responds within 24 hours."
      />

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="bg-background border border-border rounded-2xl p-12 text-center">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Thank You!</h3>
                  <p className="text-muted-foreground">We've received your inquiry and will be in touch within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-background border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-6">Request a Free Revenue Audit</h3>
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Full Name *</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-card border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Email Address *</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-card border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                        placeholder="john@practice.com"
                      />
                    </div>
                  </div>
                  <div className="mb-5">
                    <label className="block text-sm font-medium mb-1.5">Monthly Billing Volume</label>
                    <select
                      value={formData.volume}
                      onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                      className="w-full px-4 py-3 bg-card border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    >
                      <option value="">Select volume range</option>
                      <option value="under-50k">Under $50,000</option>
                      <option value="50k-250k">$50,000 – $250,000</option>
                      <option value="250k-1m">$250,000 – $1,000,000</option>
                      <option value="over-1m">Over $1,000,000</option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-1.5">Message (optional)</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-card border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                      placeholder="Tell us about your billing challenges..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary text-primary-foreground py-3.5 rounded-xl font-bold hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Submit Request"
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-background border border-border rounded-2xl p-7">
                <h3 className="font-bold mb-5">Direct Contact</h3>
                <div className="space-y-4">
                  <a href="tel:+15102902229" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">+1 (510) 290-2229</div>
                      <div className="text-xs">Mon–Fri, 8AM–6PM EST</div>
                    </div>
                  </a>
                  <a href="mailto:info@smartbilling.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">info@smartbilling.com</div>
                      <div className="text-xs">We respond within 24 hours</div>
                    </div>
                  </a>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-secondary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Our Office</div>
                      <div className="text-xs">3155 Kearney St, Ste 170 Room 2<br />Fremont, CA 94538</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-background border border-border rounded-2xl overflow-hidden h-60">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1838515758037!2d-73.98784!3d40.75798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzI4LjciTiA3M8KwNTknMTYuMiJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
