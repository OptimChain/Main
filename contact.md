---
layout: default
---

<section id="contact-form" class="block block-form contact-page-wrapper">
    <div class="block-content-2">
    <div class="contact-info">
        <h1 class="post-title underline">Contact </h1>
        <ul>
            <li><i class="fas fa-envelope"></i> Email: {{ site.contact_email }}</li>
            <li><i class="fas fa-phone-volume"></i> Phone: {{ site.phone_number }}</li>
        </ul>
        <p>To get in touch please fill the form below.</p>
    </div>
        <form name="contactForm" id="contactForm" action="https://formsubmit.io/send/{{site.contact_email}}">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Your name" aria-labelledby="name-label" required=""/>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Your email address" aria-labelledby="email-label" required="" />
            </div>
            <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" name="subject" id="subject" placeholder="Your Subject" aria-labelledby="subject-label" />
            </div>
            <div class="form-group"><label for="message">Message</label><textarea name="message" id="message" rows="7" placeholder="Your message" aria-labelledby="message-label"></textarea>
            </div>
            <div class="form-group form-checkbox">
                <input type="checkbox" id="consent" name="consent" aria-labelledby="consent-label" /><label for="consent">I understand that this form is storing my submitted information so I can be contacted.</label>
            </div>
            <div class="form-submit"><button type="submit" class="button">Send Message</button></div>
        </form>
    </div>
</section>
