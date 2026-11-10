import "./Contact.css";
function Contact() {
  return (
    <>
      <section id="contact" class="contact slide-up">
        <h2>Make your Order</h2>
        <h2>Share Some feed Back</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit" class="btn">
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}
export default Contact;
