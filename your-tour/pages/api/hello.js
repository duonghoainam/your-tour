// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { transporter, mailOptions } from "config/nodemailer";
export default async function handler(req, res) {
  if (req.method === "POST"){
    const data = req.body;
    try {
        await transporter.sendMail({
          from: data.email,
          to: data.receiveEmail,
          subject: data.name + data.phoneNumber,
          text: "Test of String",
          html: `<p>${data.message}</p>`,
        });
        return res.status(200).json({ success: true})
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  }
  res.status(400).json({ message: 'John Doe' })
}
