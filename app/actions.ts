'use server';

import * as brevo from '@getbrevo/brevo';
import { sql } from '@vercel/postgres';

export async function submitContactForm(prevState: any, formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const address = formData.get('address') as string;
  const message = formData.get('message') as string;

  // Validation
  if (!name || !email || !phone) {
    return {
      success: false,
      message: 'Please fill in all required fields.',
    };
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: 'Please enter a valid email address.',
    };
  }

  try {
    // Send transactional email
    const apiInstance = new brevo.TransactionalEmailsApi();
    apiInstance.setApiKey(
      brevo.TransactionalEmailsApiApiKeys.apiKey,
      process.env.BREVO_API_KEY!
    );

    const sendSmtpEmail = new brevo.SendSmtpEmail();
    sendSmtpEmail.subject = 'New Inspection Request - Mat Blockovich Home Inspections';
    sendSmtpEmail.to = [{ email: 'tim@onemorelight.cc', name: 'Tim Watts' }];
    sendSmtpEmail.htmlContent = `
      <h2>New Inspection Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Property Address:</strong> ${address || 'Not provided'}</p>
      <p><strong>Additional Information:</strong></p>
      <p>${message || 'Not provided'}</p>
    `;
    sendSmtpEmail.sender = { 
      name: 'Mat Blockovich Website', 
      email: 'tim@onemorelight.cc' 
    };
    sendSmtpEmail.replyTo = { email, name };

    await apiInstance.sendTransacEmail(sendSmtpEmail);

    // Add contact to Brevo list
    const contactsApi = new brevo.ContactsApi();
    contactsApi.setApiKey(
      brevo.ContactsApiApiKeys.apiKey,
      process.env.BREVO_API_KEY!
    );

    const createContact = new brevo.CreateContact();
    createContact.email = email;
    createContact.attributes = {
      FIRSTNAME: name.split(' ')[0],
      LASTNAME: name.split(' ').slice(1).join(' ') || '',
    };
    createContact.listIds = [22];
    createContact.updateEnabled = true;

    await contactsApi.createContact(createContact);

    // Save to database
    await sql`
      INSERT INTO contact_submissions (name, email, phone, address, message)
      VALUES (${name}, ${email}, ${phone}, ${address || null}, ${message || null})
    `;

    return {
      success: true,
      message: 'Thank you! Your request has been submitted successfully. We will contact you within 24 hours.',
    };
  } catch (error) {
    console.error('Error sending email:', error);
    if (error && typeof error === 'object' && 'response' in error) {
      const axiosError = error as any;
      console.error('Brevo API Error:', axiosError.response?.data);
    }
    return {
      success: false,
      message: 'There was an error submitting your request. Please try calling us directly at (801) 828-7100.',
    };
  }
}
