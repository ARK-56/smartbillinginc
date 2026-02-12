import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground/70 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <img src={logo} alt="Smart Billing" className="h-8 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm leading-relaxed">
              Leading medical billing company empowering healthcare providers and patients with seamless RCM solutions.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-primary-foreground mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/services/patients" className="hover:text-primary-foreground transition-colors">Patient Billing</Link></li>
              <li><Link to="/services/physicians" className="hover:text-primary-foreground transition-colors">Physician RCM</Link></li>
              <li><Link to="/services/hospitals" className="hover:text-primary-foreground transition-colors">Hospital Solutions</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Denial Management</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary-foreground mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/technology" className="hover:text-primary-foreground transition-colors">Technology</Link></li>
              <li><Link to="/industry-news" className="hover:text-primary-foreground transition-colors">Industry News</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary-foreground mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-light" />
                <a href="tel:+18001234567" className="hover:text-primary-foreground transition-colors">(800) 123-4567</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-light" />
                <a href="mailto:info@smartbilling.com" className="hover:text-primary-foreground transition-colors">info@smartbilling.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-light mt-0.5" />
                <span>123 Healthcare Blvd, Suite 200, New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Smart Billing Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">HIPAA Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
