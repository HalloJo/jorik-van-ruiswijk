// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const mail = require("@sendgrid/mail")
mail.setApiKey(process.env.SENDGRID_API_KEY)

type Data = {
  status: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = JSON.parse(req.body)

  const message = `
    Name: ${body.name}\r\n
    E-mail: ${body.email}\r\n
    Message: ${body.message}\r\n
  `

  const data = {
    to: "jorikvanruiswijk@gmail.com",
    from: "hello@jorikvanruiswijk.nl",
    subject: `You just got a message from ${body.name}!`,
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  }

  mail.send(data)
  
  res.status(200).json({ status: 'OK' })
}
